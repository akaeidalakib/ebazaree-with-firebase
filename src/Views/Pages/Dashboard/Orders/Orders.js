import React, { useEffect, useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [pageValue, setPageValue] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const limit = 2;
    console.log("page value", pageValue);
    console.log(orders);
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/v1/order?page=${page}&limit=${limit}`);
            const newData = await response.json();
            if (newData.status === "success") {
                setIsLoading(false)
                setOrders(newData.data.orders)
                setPageValue(newData.data.page)
            }

        };

        fetchData();
    }, [page]);
    const pageHandle = () => {
        page < pageValue ? setPage(page + 1) : setPage(pageValue);
    }
    const pageHandleDe = () => {
        setPage(Math.max(page - 1, 1))
    }
    if (isLoading) {
        <button type="button" class="bg-indigo-500" disabled>
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                {/* <!-- ... --> */}
            </svg>
            Processing...
        </button>
    }
    return (
        <div>
            {/* <!-- component --> */}
            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">Products Oder</h2>
                        <span className="text-xs">All products item</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-auto">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order number
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Total Price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order Date
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {orders.map((order, index) => (
                                    <Order
                                        order={order}
                                        index={index}
                                        key={index}

                                    />
                                ))}
                            </table>
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing {page} to {orders.length} of {pageValue} Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        onClick={pageHandleDe}
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button
                                        onClick={pageHandle}
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;