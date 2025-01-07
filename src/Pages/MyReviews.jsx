import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch(`https://assignment-10-server-lake-xi.vercel.app/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [user?.email])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-lake-xi.vercel.app/reviews/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // update the loaded coffee state
                            const remainingCoffees = reviews.filter(review => review._id !== _id);
                            setReviews(remainingCoffees);

                        }
                    })

            }
        });
    }
    return (
        <div className="overflow-x-auto md:px-12 lg:px-28 mt-[4.2rem]">
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">My Reviews of Cill Gamer</h2>
            <table className="table">
                {/* head */}
                <thead className="bg-blue-100 ">
                    <tr>
                        <th></th>
                        <th>Game Image</th>
                        <th>Game title</th>
                        <th>Email</th>
                        <th>Genres</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 text-base font-semibold">
                    {/* row 1 */}
                    {
                        reviews?.map((review, index) => <tr key={review._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={review.photo} alt="" /></td>
                            <td>{review.title}</td>
                            <td>{review.email}</td>
                            <td>{review.genres}</td>
                            <td>
                                <button className="btn btn-primary text-lg mr-2"><Link to={`/updateReview/${review._id}`}><CiEdit /></Link></button>
                                <button onClick={() => handleDelete(review._id)} className="btn btn-warning text-lg"><MdDeleteForever />
                                </button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;