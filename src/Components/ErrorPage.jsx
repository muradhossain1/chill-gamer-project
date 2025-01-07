import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import lottieError from '../assets/errorLottie.json'


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
            <div className="text-center lg:w-[30rem]">
                <Lottie animationData={lottieError}></Lottie>
            </div>
            <div>
                <h2 className="text-4xl font-bold">Data Not Found This Page</h2>
                <button className="btn btn-primary mt-6"><Link to='/'>Go to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;