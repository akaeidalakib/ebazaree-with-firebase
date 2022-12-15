import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import useAuth from '../../Views/Pages/Login/Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
const Navbar = () => {
    const { user, handleLogout, myuser } = useAuth();
    const length = useSelector((state) => state.cart.cart.length)
    const LogOut = () => {
        handleLogout()
        toast.success('Log Out!')
    }
    const menuItems = <React.Fragment>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/About" >About</NavLink></li>
        {user?.uid || myuser?.email ?
            <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><button onClick={LogOut}>Sign out</button></li>
            </>
            : <> <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li></>
        }
    </React.Fragment>
    return (
        <div className="container navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Ebajaree</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="/cart">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

                        <span className="badge badge-sm indicator-item">{length}</span>

                    </div>
                </NavLink>
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;