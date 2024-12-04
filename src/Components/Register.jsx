import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero bg-base-200 md:w-2/3 mx-auto rounded-xl min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Resgister</button>
                        </div>
                        <p className="text-lg font-semibold mt-2">Already have an account? please <Link to='/login' className="link text-blue-800">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;