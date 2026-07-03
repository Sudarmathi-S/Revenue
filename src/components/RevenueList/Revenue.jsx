import "../../assets/styles/revenue.css";

const RevenueList = () => {
    return (
        <div className="table-container">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Total Revenue</th>
                    </tr>
                </thead>

                <tbody>
                    {/* {filteredProducts.map((item) => (
                        <tr key={item.product}>
                            <td>{item.product}</td>
                            <td>{formatNumber(item.revenue)}</td>
                        </tr>
                    ))} */}
                    <tr key={1}>
                        <td>{"Product Name 1"}</td>
                        <td>{"1,000"}</td>
                    </tr>
                    <tr key={2}>
                        <td>{"Product Name 2"}</td>
                        <td>{"2,000"}</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        {/* <td>Total Revenue</td>
                        <td>{formatNumber(totalRevenue)}</td> */}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default RevenueList;