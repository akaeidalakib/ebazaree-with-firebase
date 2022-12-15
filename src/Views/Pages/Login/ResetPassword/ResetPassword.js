import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';

const ResetPassword = () => {
    const {forgotPassword } = useAuth()
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData.email)
    const forgotPass = (e) => {
        alert("submitted");
        forgotPassword(loginData.email);
        e.preventDefault();
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={forgotPass} >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Send mail</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;