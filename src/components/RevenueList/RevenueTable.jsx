import React from "react";
import { formatNumber } from "../../utils/common";

const RevenueTable = ({ products, totalRevenue }) => {

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
                {(products && products?.length > 0) ? products?.map((item, index) => (
                    <tr key={index}>
                        <td>{item?.product && item?.product}</td>
                        <td>{formatNumber(item?.revenue && item?.revenue)}</td>
                    </tr>
                )) :
                    <tr><td className="center" colSpan={2}>No products found</td></tr>
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{formatNumber(totalRevenue)}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default React.memo(RevenueTable);