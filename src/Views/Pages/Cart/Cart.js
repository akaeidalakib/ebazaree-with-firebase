import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import axios from "axios";
import { removeAllItem } from '../../../redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../Login/Hooks/useAuth';
const Cart = () => {
    const { user } = useAuth()
    const sucessNotify = () => toast.success("Sucess!");
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    const [shipping, setShipping] = useState(10);
    // console.log(shipping);
    console.log(cart)
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return { totalPrice, totalQuantity }
    }
    const totalCost = getTotal().totalPrice + Number(shipping)
    const totalQuantity = getTotal().totalQuantity


    const length = cart.length
    const info = {
        cart: cart,
        product_name: "iphone 11",
        product_profile: "apple",
        product_image: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        total_amount: totalCost,
        total_Quantity: totalQuantity,
        cus_name: user.displayName,
        cus_email: user.email

    }

    const purchase = () => {

        // console.log(info);
        // axios.post("http://localhost:8080/init", info).then((response) => {
        //     console.log(response);

        // });
        fetch(`http://localhost:8080/api/v1/order/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data)
                console.log(data);
                dispatch(removeAllItem())

            })

    };
    const cashOn = () => {

        fetch(`http://localhost:8080/api/v1/order/cashon`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // dispatch(removeAllItem())
                if (data.status === "success") {
                    sucessNotify()
                    dispatch(removeAllItem())
                }

            })
    };
    return (

        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="lg:flex sm:flex sm:flex-col lg:flex-row shadow-md my-10">
                    <div className="lg:w-3/4 sm:w-full bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{length} Items</h2>
                        </div>
                        {cart?.map((item, index) => (
                            <CartItem
                                key={index}
                                cart={item}
                            />
                        ))}
                        <Link to="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>
                    {/* second col */}
                    <div id="summary" className="lg:w-1/4 sm:w-full px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {getTotal().totalQuantity}</span>
                            <span className="font-semibold text-sm">{getTotal().totalPrice}$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm"
                                onChange={(e) => setShipping(e.target.value)}
                            >
                                <option value="10">Standard shipping - $10.00</option>
                                <option value="20">Fast shipping - $20.00</option>
                                <option value="500">Express shipping - $500.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${totalCost}</span>
                            </div>


                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                                onClick={cashOn}
                            >Checkout</button>
                            <button className="bg-indigo-500 mt-4 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                                onClick={purchase}
                            >pay now</button>
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />
        </div>

    );
};

export default Cart;