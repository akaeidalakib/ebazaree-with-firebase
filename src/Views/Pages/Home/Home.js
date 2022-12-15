import React from 'react';
import FeatureCate from '../../../Components/FeatureCate/FeatureCate';
import Hero from '../../../Shared/Header/Hero';
import Pdemo from '../Products/Product/pdemo';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="">
            <Hero />
            <FeatureCate />
            <Products />
            <Pdemo />
        </div>
    );
};

export default Home;