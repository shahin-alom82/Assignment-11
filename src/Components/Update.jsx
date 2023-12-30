
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const Update = () => {
    const update = useLoaderData();
    const { _id, email, job, text, selec, date, mini, max } = update;

    const handleUpdat = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const job = form.job.value;
        const text = form.tex.value;
        const selec = form.selec.value;
        const mini = form.mini.value;
        const date = form.date.value;
        const max = form.max.value;
        const add = { email, job, text, selec, date, mini, max };
        console.log(add);

        // Data to server
        fetch(`https://assignment-11-server-site-online-marketing.vercel.app/job/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Job Updateded Successfuly!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    if (data.modifiedCount > 0) {

                        window.location.href = "/addjob";
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="">
            <div>
                <div className="mt-10 ">
                    <h1 className="text-center text-4xl font-bold text-primary">My Posted Job Update</h1>
                    <p className='text-center text-gray-600 mt-4'>Seeking an experienced Administrative Assistant to streamline office operations and provide top-notch support. <br />
                        Strong organizational skills and attention to detail are a must.</p>
                    <form onSubmit={handleUpdat} className="card-body bg-blue-100 mt-10 rounded-lg">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={email} required placeholder='Email' className="input input-bordered border border-gray-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="job" defaultValue={job} required placeholder='Job Title' className="input input-bordered border border-gray-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Dateline</span>
                                </label>
                                <input type="date" name="date" defaultValue={date} required placeholder="Dateline" className="input input-bordered border border-gray-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className='rounded-lg border border-gray-500' name="tex" defaultValue={text} id="" cols="10" rows="2" required></textarea>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <select className="select select-bordered w-[620px] border border-gray-500" name="selec" defaultValue={selec}>
                                    <option>Web Developer</option>
                                    <option>Digital Marketing</option>
                                    <option>Graphics Designer</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="text" name="mini" defaultValue={mini} required placeholder="Minimum Price" className="input input-bordered border border-gray-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="text" name="max" defaultValue={max} required placeholder="Maximum Price" className="input input-bordered border border-gray-500" />
                            </div>


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Jod</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
export default Update;

