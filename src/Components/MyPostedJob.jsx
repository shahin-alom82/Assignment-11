import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import MyPostedJobs from "./MyPostedJobs";

const MyPostedJob = () => {
    const LoadedCards = useLoaderData()
    const [cards, setCards] = useState(LoadedCards)
    console.log(cards)
    return (
        <div>
            <div className="text-center text-4xl text-green-400 mt-10 font-bold">
                <h1>My Posted Job</h1>


                <div className="carousel w-full lg:h-[500px] md:h-[300px] object-cover rounded-lg mt-10">
                    <div className="hero object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/992G8Zn/bbbbb.webp)' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                        </div>
                    </div>
                </div>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {
                    cards.map(card => <MyPostedJobs key={card._id} card={card}
                        cards={cards}
                        setCards={setCards}
                    ></MyPostedJobs>)
                }
            </div>
        </div>
    );
};

export default MyPostedJob;