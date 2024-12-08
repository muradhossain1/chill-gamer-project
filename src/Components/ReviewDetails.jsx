import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ReviewDetails = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData();
    console.log(user)
    const { photo, title, description, genres, rating, year, email, name} = review;

    const addWatchlist = { photo, title, description, genres, rating, year, name: user?.displayName, email: user?.email }

    const handleAddWatchList = () => {
        fetch('http://localhost:5000/watchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addWatchlist)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Reviews added watchlist successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }

            })
    }
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
                        <button onClick={handleAddWatchList} className="btn btn-primary w-full">
                            Add to WatchList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;