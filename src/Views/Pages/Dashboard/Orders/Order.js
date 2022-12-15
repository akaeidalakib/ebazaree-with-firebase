import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import OrderDetails from './OrderDetails/OrderDetails';

const Order = ({ order, index }) => {
    // console.log(order.cart);
    const carts = order.cart
    const id = order._id
    const handleCancel = (id) => {
        const data = { orderStatus: "cancel" }
        fetch(`http://localhost:8080/api/v1/order/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log("response");
    };
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/v1/order/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log("response");
    };
    return (
        <tbody>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {order.orderNo}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$ {order.total_amount}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {order.createdAt}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {order.cart.length}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">{order.orderStatus
                        }</span>
                    </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                            className="absolute inset-0 "></span>
                        <span className="relative">
                            {/* The button to open modal */}
                            <div className="collapse">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title text-base">
                                    <p className="text-base">...</p>
                                </div>
                                <div className="collapse-content shadow-md bg-slate-100 text-lg">
                                    <NavLink to={`/dashboard/orders/${id}`}>
                                        <p className="p-1 m-1">Details</p>
                                    </NavLink>
                                    {order.orderStatus === "cancel" ? <p className="cursor-pointer p-1 m-1 text-red-600"
                                        onClick={() => handleDelete(order._id)}
                                    >Delete</p> : <p className="cursor-pointer p-1 m-1 text-red-600"
                                        onClick={() => handleCancel(order._id)}
                                    >Cancel</p>}

                                </div>
                            </div>


                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">

                                    <div className="z-50 overflow-auto w-full">
                                        <table className="table w-full">
                                            {/* <!-- head --> */}
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox" />
                                                        </label>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Job</th>
                                                    <th>Favorite Color</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            {carts.map((cart) => (
                                                <tbody>
                                                    {/* <!-- row 1 --> */}
                                                    <tr>
                                                        <th>
                                                            <label>
                                                                <input type="checkbox" className="checkbox" />
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">Hart Hagerty</div>
                                                                    <div className="text-sm opacity-50">United States</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Zemlak, Daniel and Leannon
                                                            <br />
                                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                        </td>
                                                        <td>Purple</td>
                                                        <th>
                                                            <button className="btn btn-ghost btn-xs">details</button>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            ))}

                                            {/* <!-- foot --> */}
                                            <tfoot>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Job</th>
                                                    <th>Favorite Color</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>

                                        </table>
                                    </div>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </span>
                </td>
            </tr>
        </tbody>
    );
};

export default Order;