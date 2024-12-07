import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Data Not Found This Page</h2>
            <button className="btn btn-primary mt-6"><Link to='/'>Go back Home</Link></button>
        </div>
    );
};

export default ErrorPage;