import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registerLottie from "../assets/registerLottie.json"
import Lottie from "lottie-react";


const Register = () => {
    const { createUser, updateProfileUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            return setError('Password must contain at least 6 character')
        }
        if (!/[a-z]/.test(password)) {
            return setError('Password must contain at least one lowercase letter')
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Password must contain at least one uppercase letter')
        }

        createUser(email, password)
            .then(() => {
                toast.success('Successful your google account Register', {
                    position: "top-center",
                })

                updateProfileUser(name, photo);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero mt-[4.2rem] md:px-12 lg:px-28 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 border w-full max-w-sm shrink-0 shadow-2xl ">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold">Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute top-[56px] right-4">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Resgister</button>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-lg font-semibold mt-2">Already have an account? please <Link to='/login' className="link text-blue-800">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;