import { useState } from "react"

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);

    return (
        <>
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Paid</td>
                        <td>Recipient</td>
                        <td>Products</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map()}
                </tbody>
            </table>
        </>
    )
}