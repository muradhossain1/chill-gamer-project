import { Link, useLoaderData } from "react-router-dom";


const ReviewDetails = () => {
    const review = useLoaderData();
    // const { _id, photo, title, description, rating, year, genres, email, name} = review;
    const { _id, photo, title} = review;
    return (
        <div className="card bg-base-100 w-96 border md:mx-auto shadow-xl p-6">
            <figure className="">
                <img
                    src={photo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title">{title}!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/watchList/${_id}`}>Add to WatchList</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;