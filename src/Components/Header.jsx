import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
    const navigate = useNavigate()

    const { user, userLogout } = useContext(AuthContext)

    const handleUserLogout = () => {
        userLogout()
        .then(() => {
            navigate('/')
        })
    }

    const links = <>
        <li className="text-sm font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-sm font-semibold"><NavLink to='/allReviews'>All Reviews</NavLink></li>
        <li className="text-sm font-semibold"><NavLink to='/addReview'>Add Review</NavLink></li>
        <li className="text-sm font-semibold"><NavLink to='/myReviews'>My Reviews</NavLink></li>
        {user? <li className="text-sm font-semibold"><NavLink to='/watchList'>Watch List</NavLink></li>:''}
    </>
    return (
        <div className="navbar bg-base-200 my-4 md:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="font-extrabold text-2xl">Chill Gamer</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                        <div className="flex items-center gap-4 mr-8">
                            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                            {/* <h2 className="hidden md:block font-semibold">{user?.displayName}</h2> */}
                        </div>
                        <button onClick={handleUserLogout} className="btn btn-primary">Log-Out</button>
                    </>
                        :
                        <Link to='/login'><button className="btn btn-primary">Log-In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;