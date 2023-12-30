import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full lg:h-[600px] md:h-[200px] object-cover rounded-lg mt-5">
                    <div className="hero object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/M50JLkq/Best-Online.webp)' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <input type="text" placeholder="Search here...." className=" p-3 mt-56 rounded-l   lg:w-72 input-error text-black" />
                                <button className="bg-[#FF444A] lg:w-28 p-3 rounded-r">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;