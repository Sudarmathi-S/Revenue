import { useEffect, useMemo, useState } from "react";
import "../../assets/styles/revenue.css";
import { formatNumber } from "../../utils/common";
import Search from "../common/Search";
import RevenueTable from "./RevenueTable";
import Loader from "../common/Loader";
import Error from "../common/Error";

const RevenueList = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const responses = await Promise.all([
                    fetch("/json/branch/branch1.json"),
                    fetch("/json/branch/branch2.json"),
                    fetch("/json/branch/branch3.json"),
                ]);
                // Check if all requests were successful
                const data = await Promise.all(
                    responses?.map(async (response) => {
                        if (!response.ok && response?.json()) {
                            setError("Something went wrong while loading products.");
                            throw new Error(`Failed to fetch ${response.url}`);
                        }
                        return await response?.json();
                    })
                );
                const allProducts = data?.flat();
                const revenueMap = new Map();
                allProducts?.forEach(({ product, revenue }) => {
                    revenueMap.set(
                        product,
                        (revenueMap.get(product) || 0) + revenue
                    );
                });
                const mergedProducts = [...revenueMap.entries()]
                    .map(([product, revenue]) => ({
                        product,
                        revenue,
                    }))
                    .sort((a, b) => a.product.localeCompare(b.product));
                setProducts(mergedProducts);
            } catch (err) {
                setError("Something went wrong while loading products.");
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500)
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        const searchTerm = search?.toLowerCase() || "";
        return products?.filter(item =>
            item?.product
                .toLowerCase()
                .includes(searchTerm)
        );
    }, [products, search]);

    const totalRevenue = useMemo(() => {
        return filteredProducts?.reduce(
            (sum, item) => sum + item.revenue,
            0
        );
    }, [filteredProducts]);

    return (<>
        {loading ?
            <Loader
                loading={loading}
                loadHead={"Loading Products..."}
                loadMessage={"Please wait while we aggregate revenue from all branches."}
            /> :
            error ? <Error errorHead={"Unable to Load Products"} error={error} /> :
                <div className="table-container">
                    <Search
                        placeholder={"Type to search..."}
                        search={search}
                        setSearch={setSearch}
                    />
                    <RevenueTable
                        products={filteredProducts}
                        totalRevenue={totalRevenue}
                    />
                </div>}
    </>)
}

export default RevenueList;
