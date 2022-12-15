import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MyImgs from '../../../../Components/MyImgs';
import Star from '../../../../Components/Star/Star';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import FormatPrice from '../../../../Components/FormatPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
const Product = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const [data, setData] = useState({});
    const [Img, setImg] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`);
            const newData = await response.json();
            setData(newData)
            setImg(newData.image[0].url)
        };

        fetchData();
    }, [id]);
    const { name, id: alias, company, price, image } = data;
    return (
        <div className='gap-4'>
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <nav className="flex">
                        <ol role="list" className="flex items-center">
                            <li className="text-left">
                                <div className="-m-1">
                                    <p href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </p>
                                </div>
                            </li>

                            <li className="text-left">
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-400">/</span>
                                    <div className="-m-1">
                                        <p className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </p>
                                    </div>
                                </div>
                            </li>

                            <li className="text-left">
                                <div className="flex items-center">
                                    <span className="mx-2 text-gray-400">/</span>
                                    <div className="-m-1">
                                        <p href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {data.name} </p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">

                            <MyImgs
                                imgs={image}
                                key={data.id}
                            />
                        </div>

                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{data.name}</h1>
                            <Star stars={data.stars} reviews={data.reviews} />
                            <div className="flex justify-between items-center w-full border-b border-slate-300">
                                <div className="text-center">
                                    <TbTruckDelivery className="text-2xl p-2 text-center h-16 w-16 bg-slate-100 rounded-full" />
                                    <p>Free Delivery</p>
                                </div>

                                <div className="text-center">
                                    <TbReplace className="text-2xl p-2 text-center h-16 w-16 bg-slate-100 rounded-full" />
                                    <p>30 Days Replacement</p>
                                </div>

                                <div className="text-center">
                                    <TbTruckDelivery className="text-2xl p-2 text-center h-16 w-16 bg-slate-100 rounded-full" />
                                    <p>Fast Delivery </p>
                                </div>

                                <div className="text-center">
                                    <MdSecurity className="text-2xl p-2 text-center h-16 w-16 bg-slate-100 rounded-full" />
                                    <p>2 Year Warranty </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="p-2">
                                    Available:
                                    <span className="font-bold"> {data.stock > 0 ? "In Stock" : "Not Available"}</span>
                                </p>
                                <p className="p-2">
                                    ID : <span className="font-bold"> {data.id} </span>
                                </p>
                                <p className="p-2">
                                    Brand :<span className="font-bold"> {data.company} </span>
                                </p>
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                <div className="flex items-end">
                                    <h1 className="text-3xl font-bold"><FormatPrice price={data.price} /></h1>
                                    {/* <span className="text-base">/month</span> */}
                                </div>

                                <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                    onClick={() => {
                                        dispatch(addToCart({
                                            name, id, price, Img, company
                                        }))
                                        toast.success('Added to Cart')
                                    }
                                    }
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>

                            <ul className="mt-8 space-y-2">
                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                    </svg>
                                    shipping only bangladesh
                                </li>

                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                    </svg>
                                    Cancel Anytime
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="border-b border-gray-300">
                                <nav className="flex gap-4">
                                    <p className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </p>

                                    <p className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> {data.reviews} </span>
                                    </p>
                                </nav>
                            </div>

                            <div className="mt-8 flow-root sm:mt-12">
                                <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                                <p className="mt-4">{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default Product;