import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, loginWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const info = {
        email: "mezba1@test.com",
        password: "mezba123456#A"
    }

    const handleLoginSubmit = () => {
        alert("submitted");
        fetch(`http://localhost:8080/api/v1/user/login`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.data.token);
                console.log(data.data);
                //"Authorization": localStorage.getItem("token")

            })
    }
    const handleLoginGoogle = () => {
        loginWithGoogle(navigate, location);
    }
    // console.log(localStorage.getItem("token"))

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            {/* <form onSubmit={}> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    onChange={handleOnChange}
                                    type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input

                                    name="password"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <NavLink className="label-text-alt link link-hover" to="/reset-password" >Forgot password?</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary"
                                    onClick={handleLoginSubmit}
                                >Login</button>
                            </div>
                            {/* </form> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                    onClick={handleLoginGoogle}
                                >Login with google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;