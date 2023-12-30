import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from './Brands';

const Brand = () => {
    const detailsBrands = useLoaderData();
    console.log(detailsBrands)
    return (
        <div className='mt-10'>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">Job Details</h1>
            {
                detailsBrands.length > 0
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                        {
                            detailsBrands.map(product => <Brands
                                key={product._id}
                                product={product}
                            ></Brands>)
                        }
                    </div>
                    :
                    <h1 className="text-center mx-auto justify-center text-3xl text-zinc-600 py-20">No  Available Data</h1>
            }
        </div>
    );
};

export default Brand;