import React, { useState } from 'react';

const MyImgs = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    // console.log(imgs[0].url);
    return (

        <div className="lg:flex lg:items-start">
            <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                    <img className="h-full w-full max-w-full object-cover" src={mainImage.url} alt={mainImage.filename} />
                </div>
            </div>

            <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                    {imgs.map((curElm, index) => {
                        return (
                            <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                <figure>
                                    <img className="h-full w-full object-cover"
                                        src={curElm.url}
                                        alt={curElm.filename}
                                        key={index}
                                        onClick={() => setMainImage(curElm)}
                                    />
                                </figure>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyImgs;