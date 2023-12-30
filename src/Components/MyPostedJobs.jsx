
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyPostedJobs = ({ card, setCards, cards }) => {
    const { _id, email, job, text, date, selec, mini, max } = card;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-site-online-marketing.vercel.app/job/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainging = cards.filter(c => c._id !== _id);
                            setCards(remainging)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div>
                <div className="card bg-gradient-to-r bg-blue-100">
                    <div className="p-6">
                        <div className="mx-auto bg-slate-300 rounded-lg p-4">
                            <h1 className="text-xl mt-2 ">Category Name :<span>{selec}</span></h1>
                            <h2 className="text-xl h-5 mt-2">Email : <span>{email}</span></h2>
                            <h1 className="text-xl mt-2 ">Dateline : <span>{date}</span></h1>
                            <h1 className="text-xl mt-2 ">Minimum Price : <span>{mini}</span></h1>
                            <h1 className="text-xl mt-2 ">Maximum Price : <span>{max}</span></h1>
                            <h2 className="mt-2 text-xl ">Job Title : <span>{job}</span></h2>
                            <h1 className="text-xl mt-2 ">Description : <span>{text}</span></h1>
                        </div>
                        <div className="card-actions justify-center mt-2">
                            <Link to={`/addjob/${_id}`}>
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-400 h-12 lg:w-[380px] w-[300px] mt-3">
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className=" rounded-lg lg:text-xl text-white bg-red-400 h-12 lg:w-[400px] w-[300px] mt-3">
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobs;