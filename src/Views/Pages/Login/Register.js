
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom';
import useAuth from './Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, loginWithGoogle } = useAuth();
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
        password: "mezba123456#A",
        confirmPassword: "mezba123456#A",
        firstName: "Mezbaul Abedin",
        lastName: "Forhan",
        shippingAddress: "944 osthir Street",
        presentAddress: "944 osthir Street",
        permanentAddress: "944 Russell Street",
        imageURL: "https://i.ibb.co/WnFSs9Y/unnamed.webp"
    }
    const handleRegisterSubmit = () => {
        alert("submitted");
        fetch(`http://localhost:8080/api/v1/user/signup`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                <Navigate to="/login" replace={true} />
                console.log(data);

            })
    }
    // const handleRegisterSubmit = (e) => {
    //     alert("submitted");
    //     registerUser(loginData.firstName, loginData.email, loginData.password, loginData.confirmPassword, navigate, location);
    //     e.preventDefault();
    // }
    const handleLoginGoogle = () => {
        loginWithGoogle(navigate, location);
    }
    console.log(loginData)
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
                            {/* <form onSubmit={handleRegisterSubmit} > */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="firstName"
                                    onChange={handleOnChange}
                                    type="text" placeholder="Name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">confirmPassword</span>
                                </label>
                                <input

                                    name="confirmPassword"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="confirmPassword" className="input input-bordered" />
                                <label className="label">
                                    <NavLink className="label-text-alt link link-hover" to="/login" >Already have an account?</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                    type="submit"
                                    onClick={handleRegisterSubmit}
                                >Register</button>
                            </div>
                            {/* </form> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                    type="submit"
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

export default Register;