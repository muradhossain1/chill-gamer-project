/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllReviewCard = ({ review }) => {
    const { _id, photo, title, genres, rating, year } = review;
    return (
        <div className="card bg-base-100 shadow-xl p-4 border">
            <figure className="">
                <img
                    src={photo}
                    alt="Photo"
                    className="rounded-xl h-36" />
            </figure>
            <div className=" space-y-4 mt-4 ">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="flex justify-between">
                    <p className="font-semibold text-lg">Genres : {genres}</p>
                    <p className="flex items-center gap-1 text-xl font-semibold"> {rating} <span className="text-yellow-500"><FaStar></FaStar></span></p>
                </div>
                <p className="font-semibold text-base">Publishing Year : {year}</p>
                <div className="card-actions">
                    <button className="btn w-full btn-primary">
                        <Link to={`/reviewDetails/${_id}`}>Explore Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllReviewCard;