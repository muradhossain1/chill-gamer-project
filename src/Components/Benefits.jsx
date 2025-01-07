import { FaCheckCircle } from "react-icons/fa";


const Benefits = () => {
    return (
        <div className="md:px-12 lg:px-28">
            <h2 className="text-3xl md:text-4xl text-center font-bold mt-8">Chill gamer benefits Section</h2>
            <div className="border p-6  mx-auto rounded-xl my-10 bg-gray-200 ">
                <h2 className="text-3xl font-bold "> Get lifetime Benefits :</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span> Free Lifetime updates</p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>User friendly page builder</p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>All Reviewers demo data</p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>Premium plugins </p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>6 months tech support </p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>View details reviewers data</p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>Theme & child theme</p>
                    <p className="px-6 py-3 flex items-center gap-2 rounded-xl text-base font-semibold bg-white" ><span className="text-green-600"><FaCheckCircle /></span>XD/PSD files</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;