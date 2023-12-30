import React from 'react';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const CategoryCard = ({ services }) => {
    console.log(services)
    const { _id, img, title } = services;
    return (
        <div>
            <NavLink to={`/card/${title}`}>
                <div className="card bg-gradient-to-r bg-gray-300">
                    <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold h-5 text-center justify-center">{title}</h2>
                        <div className="card-actions justify-center">
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default CategoryCard;