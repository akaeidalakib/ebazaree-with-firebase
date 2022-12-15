import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/v1/order/${id}`);
            const newData = await response.json();
            setData(newData.data.cart)
        };

        fetchData();
    }, [id]);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>QT</th>
                            <th>price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {data.map((order, index) => {
                            console.log(order)
                            const number = index + 1
                            return (
                                <tr>
                                    <th>{number}</th>
                                    <td>{order.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity * order.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetails;