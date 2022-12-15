import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.pujakaitem.com/api/products");
            const newData = await response.json();
            setProducts(newData)
        };

        fetchData();
    }, []);
    // console.log(products);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, []);
    return (

        <div>
            <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                        {products && products.map((pd, index) => {
                            return (
                                <ProductList
                                    key={index}
                                    product={pd}
                                />
                            )
                        })}

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Products;