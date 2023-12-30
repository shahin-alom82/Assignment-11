import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";


const CategoryCards = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://assignment-11-server-site-online-marketing.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className="text-5xl text-primary font-bold">Browse By <span className="text-primary">Category</span></h1>
                {/* <h2 className="mt-4 text-5xl font-bold text-[#151515]">Market Places</h2> */}
                <p className=" mt-5 text-gray-600">Elevate Your Online Presence with Expert Web Development. <br />
                    Dominate the Digital Landscape with Strategic Marketing.<br />
                    Stunning Graphics Design to Make Your Brand Shine.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {
                    services.map(services => <CategoryCard key={services.id} services={services}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;

