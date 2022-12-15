import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
const Dashboard = () => {
    return (
        <div className="bg-slate-200 flex h-screen">
            <aside className="fixed z-50 md:relative">
                {/* <!-- Sidebar --> */}
                <input type="checkbox" className="peer hidden" id="sidebar-open" />
                <label className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Sidebar Navigation" className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-scroll bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
                    <div className="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
                        <span className="">
                            <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
                            <span className="text-xl">rbane</span>
                        </span>
                    </div>
                    <ul className="mt-4 space-y-3 md:mt-20">
                        <li className="relative">
                            <Link to="/dashboard">
                                <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                    <span></span>
                                    <span className="">Dashboard</span>
                                </button>
                            </Link>
                        </li>
                        <li className="relative">
                            <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
                                <span></span>
                                <span className="">Transaction</span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span
                                ></span
                                ><span className="">Send Money</span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                <span className="text-2xl"></span
                                ><span className="">Payments</span>
                            </button>
                        </li>
                        <li className="relative">
                            <Link to="/dashboard/orders">
                                <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                    <span className="text-2xl"></span
                                    ><span className="">Order</span>
                                </button>
                            </Link>
                        </li>

                        <li className="relative">
                            <Link to="/dashboard/change-password">
                                <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                                    <span></span><span className="">Change Password</span>
                                </button>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to="/dashboard/myaccount">
                                <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none ">
                                    <span className="h-6 w-6 text-red-700"><BsFillPersonFill
                                    /></span>
                                    <span className="">Settings</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            {/* <!-- /Sidebar --> */}

            <div className="flex h-full w-full flex-col">
                {/* <!-- Navbar --> */}
                <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
                    <div className="flex w-full flex-col justify-between overflow-auto transition-all sm:max-h-full sm:flex-row sm:items-center">
                        <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
                            <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" className=""></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                            </svg>
                            <input type="name" name="search" className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" placeholder="Search for anything" />
                        </div>
                    </div>
                </header>
                {/* <!-- /Navbar --> */}

                {/* <!-- Main --> */}
                <div className="h-full overflow-y-auto pl-10">
                    <Outlet />
                </div>
                {/* <!-- /Main --> */}
            </div>
        </div>
    );
};

export default Dashboard;


