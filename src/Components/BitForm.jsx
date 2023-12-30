import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BitFormsRow from "./BitFormsRow";

const BitForm = () => {
    const LoadedCards = useLoaderData()
    const [cards, setCards] = useState(LoadedCards)
    console.log(cards)
    return (
        <div>
            <div className="text-center text-4xl text-green-400 mt-10 font-bold">
                <h1>My Bits</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {
                    cards.map(card => <BitFormsRow key={card._id} card={card}
                        cards={cards}
                        setCards={setCards}
                    ></BitFormsRow>)
                }
            </div>
        </div>
    );
};

export default BitForm;