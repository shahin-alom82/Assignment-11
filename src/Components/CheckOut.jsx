
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData();
    console.log(service)
    const { user } = useContext(AuthContext);
    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const des = form.des.value;
        const email = form.email.value;
        const status = form.status.value;
        const booking = { name, date, price, des, email, status }
        console.log(booking)


        fetch("https://assignment-11-server-site-online-marketing.vercel.app/bit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Complete',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>

            <h1 className='mt-10 text-blue-800 text-center text-4xl font-bold'>Your Bit Form</h1>

            <form onSubmit={handleBook} className="card-body bg-blue-100 mt-10 rounded-lg">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name='name' placeholder="Job Title" className="input input-bordered  border border-gray-500" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="des" id="" placeholder='Description' cols="5" rows="2" required className='border border-gray-500 rounded-lg'></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder='Email' required className='input input-bordered border border-gray-500 rounded-lg' id="" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered border border-gray-500" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dateline</span>
                        </label>
                        <input type="date" name='date' placeholder='Dateline' className="input input-bordered border border-gray-500" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name='status' placeholder='Status' className="input input-bordered border border-gray-500" required />
                    </div>

                </div>

                <Link to="/mybits">
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Complete" />
                    </div>
                </Link>

            </form>
        </div>
    );
};

export default CheckOut;