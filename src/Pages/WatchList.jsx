import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";


const WatchList = () => {
    const {user} = useContext(AuthContext)
    const [watchList, setWatchList] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/myWatchList?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setWatchList(data)
        })
    }, [user?.email])

    return (
        <div className="overflow-x-auto md:px-28">
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">My Watch-list of Cill Gamer</h2>
            <table className="table">
                {/* head */}
                <thead className="bg-orange-100 ">
                    <tr>
                        <th></th>
                        <th>Game Image</th>
                        <th>Game title</th>
                        <th>Name</th>
                        <th>Genres</th>
                        <th>Publishing year</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 text-base font-semibold">
                    {/* row 1 */}
                    {
                        watchList?.map((watch, index) => <tr key={watch._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={watch.photo} alt="" /></td>
                            <td>{watch.title}</td>
                            <td>{watch.name}</td>
                            <td>{watch.genres}</td>
                            <td>{watch.year}</td>
                            <td className="flex items-center gap-1">{watch.rating} <span className="text-base text-yellow-500"><FaStar></FaStar></span></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default WatchList;