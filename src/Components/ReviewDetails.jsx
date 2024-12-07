import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const ReviewDetails = () => {
    const review = useLoaderData();
    
    const { _id, photo, title, description, genres, rating, name, email } = review;
    return (
        <div className="md:w-3/4 lg:w-2/4 mx-auto ">
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">Review Details of Cill Gamer</h2>
            <div className="card bg-base-100 border md:mx-auto shadow-xl p-6">
                <figure className="">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="space-y-4 mt-4 ">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Genres : {genres}</p>
                        <p className="flex items-center gap-1 text-xl font-semibold"> {rating} <span className="text-yellow-500"><FaStar></FaStar></span></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Description :</h2>
                        <p className="font-serif mt-2 text-gray-600">{description}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Reviewer’s  Name : <span className="font-serif text-gray-600">{name}</span></h2>
                        <h2 className="font-bold text-lg mt-1">Reviewer’s  Email : <span className="font-serif text-gray-600">{email}</span></h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">
                            <Link to={`/watchList/${_id}`}>Add to WatchList</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;