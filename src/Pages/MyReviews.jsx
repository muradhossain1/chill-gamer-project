import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyReviews = () => {
    // http://localhost:5000/reviews?email=muradssq12@gmail.com
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState();
    // console.log(user)
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [user?.email])
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
                        reviews.map(review => <tr key={review._id}>
                            <th>1</th>
                            <td>{review.name}</td>
                            <td>{review.email}</td>
                            <td>
                                <button className="btn">E</button>
                                <button className="btn">x</button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;