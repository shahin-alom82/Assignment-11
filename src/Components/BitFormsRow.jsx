

const BitFormsRow = ({ card }) => {
    const { name, date, price, email } = card;
    return (
        <div>
            <div>
                <div className="card bg-gradient-to-r bg-blue-100">
                    <div className="p-6">
                        <div className="mx-auto bg-slate-300 rounded-lg p-4">
                            <h1 className="text-xl mt-2 ">Category Name :<span>{name}</span></h1>
                            <h2 className="text-xl h-5 mt-2">Email : <span>{email}</span></h2>
                            <h1 className="text-xl mt-2 ">Dateline : <span>{date}</span></h1>
                            <h1 className="text-xl mt-2 ">Minimum Price : <span>{price}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BitFormsRow;