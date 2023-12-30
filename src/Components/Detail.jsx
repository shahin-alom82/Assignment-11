import { Link } from "react-router-dom";


const Detail = ({ card }) => {
    const { id, description, img, deadline, brand, price } = card;
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-lime-700">Job Details Page</h1>
            <p className="text-center text-gray-700 mt-2">
                A job details page typically provides comprehensive information about a specific job opening, including details <br />  about the position, requirements, responsibilities, and how to apply.It serves as a crucial resource <br />  for potential candidates to understand the role and make informed decisions.</p>
            <div className="mt-10">
                <div className="card bg-gray-300">
                    <img className="lg:w-[1400px] lg:h-[470px] rounded-lg md:w-[300px] md:h-[150px] object-cover" src={img} alt="" />
                    <div className='p-6'>
                        <h1 className="text-2xl font-bold mt-2">{brand}</h1>
                        <h1 className="text-xl font-bold mt-2">{deadline}</h1>
                        <button className=" rounded font-bold mt-3 text-xl">{price}</button>
                        <h1 className="mt-3 text-gray-700 text-xl">{description}</h1>
                        <div className="card-actions justify-start">
                            <Link to="/bitform">
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] w-[250px] mt-3">
                                    Place Your Bit Form
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Detail;

