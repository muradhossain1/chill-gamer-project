/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loadingUser } = useContext(AuthContext);
    const location = useLocation()
    if (user) {
        return children
    }
    if (loadingUser) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner text-secondary"></span></div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoute;