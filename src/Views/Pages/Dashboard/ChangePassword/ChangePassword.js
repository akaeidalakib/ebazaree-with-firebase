import React, { useState } from 'react';
import useAuth from '../../Login/Hooks/useAuth';

const ChangePassword = () => {
    const { user, changePassword } = useAuth()
    console.log(user)
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const password = loginData.newPassword
    console.log(loginData.newPassword)
    const changePass = (e) => {
        alert("submitted");
        changePassword(user.email, password);
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
                    <form onSubmit={changePass}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Old Password</span>
                                </label>
                                <input type="password"
                                    name="oldPassword"
                                    onChange={handleOnChange}
                                    placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New password</span>
                                </label>
                                <input type="password"
                                    name="newPassword"
                                    onChange={handleOnChange}
                                    placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;