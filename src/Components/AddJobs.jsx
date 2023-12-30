
import Swal from 'sweetalert2'
const AddJobs = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const job = form.job.value;
        const text = form.text.value;
        const selec = form.selec.value;
        const mini = form.mini.value;
        const max = form.max.value;
        const date = form.date.value;
        const add = { email, job, text, selec, mini, date, max };
        console.log(add);

        // Data to server
        fetch("https://assignment-11-server-site-online-marketing.vercel.app/job", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Job Added Successfuly!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="">
            <div>
                <div>
                    <div className='text-center mt-10'>
                        <h1 className='text-4xl font-bold text-blue-500'>Job Apply Manage !</h1>
                        <p className='mt-4 text-gray-700'>We are seeking a highly organized and detail-oriented Administrative Assistant to join our team. The ideal candidate will provide crucial <br /> support to the office by handling various administrative tasks and ensuring the smooth flow of daily operations.</p>
                    </div>
                    <div className="carousel w-full lg:h-[600px] md:h-[200px] object-cover rounded-lg mt-10">
                        <div className="hero object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/VwRJdCz/find-job-uk.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-4xl font-bold mx-[400px] rounded-lg p-4 justify-center mt-10  text-blue-500 ">Add Jobs</h1>

                <form onSubmit={handleAddProduct} className="card-body bg-blue-100 mt-10 rounded-lg">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" required placeholder="Email" className="input input-bordered border border-gray-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="job" required placeholder="Job Title" className="input input-bordered border border-gray-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dateline</span>
                            </label>
                            <input type="date" name="date" required placeholder="Dateline" className="input input-bordered border border-gray-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className='rounded-lg border border-gray-500 ' placeholder='Description' name="text" id="" cols="10" rows="2"></textarea>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <select className="select select-bordered w-[620px] border border-gray-500" name="selec">
                                <option>Web Developer</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Designer</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <input type="text" name="mini" required placeholder="Minimum Price" className="input input-bordered border border-gray-500" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <input type="text" name="max" required placeholder="Maximum Price" className="input input-bordered border border-gray-500" />
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Jod</button>
                    </div>

                </form>

            </div>
        </div>
    );
};
export default AddJobs;

