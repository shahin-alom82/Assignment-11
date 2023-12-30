import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ product }) => {
    const { id, description, img, deadline, brand, price } = product;
    return (
        <div>
            <div className="card bg-gradient-to-r bg-gray-300">
                <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold h-5">{brand}</h2>
                    <h1 className='text-xl mt-4'>{deadline}</h1>
                    <h1 className='text-xl mt-2'>{price}</h1>
                    <h1 className='text-sm text-gray-700 mt-2'>{description}</h1>
                    <Link to={`/bit/${id}`}> <button className='btn btn-primary w-full h-10 mt-4'>Bit Now</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Brands;