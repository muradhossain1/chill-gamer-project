import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const Login = () => {
    const { loginUser, LoginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(() => {
            toast.success('Successful your account Login', {
                position: "top-center",
            })
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            setError(error.message)
            toast.error("Authentication did't match", {
                position: "top-center"
            })
        })
    };

    const handleLoginGoogle = () => {
        LoginWithGoogle()
        .then(() => {
            toast.success('Successful your google account Login',{
                position: "top-center",
            })
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div className="hero bg-base-200 md:w-2/3 mx-auto mt-12 rounded-xl min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label ">
                                <a href="#" className="label-text-alt link link-hover text-base font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-lg font-semibold mt-2">New to this website? please <Link to='/register' className="link text-blue-800">Register</Link></p>
                    </form>
                    <button onClick={handleLoginGoogle} className="btn btn-primary mx-8 mb-8">
                        <FaGoogle></FaGoogle> Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;