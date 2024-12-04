/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllReviewCard = ({ review }) => {
    const { _id, photo } = review;
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <figure className="">
                <img
                    src={photo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/reviewDetails/${_id}`}>Explore Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllReviewCard;