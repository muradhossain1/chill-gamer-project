import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState();

    // console.log(user)
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
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

                fetch(`http://localhost:5000/reviews/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
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
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        reviews?.map(review => <tr key={review._id}>
                            <th>1</th>
                            <td>{review.name}</td>
                            <td>{review.email}</td>
                            <td>
                                <button className="btn"><Link to={`/updateReview/${review._id}`}>edit</Link></button>
                                <button onClick={() => handleDelete(review._id)} className="btn">x</button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;