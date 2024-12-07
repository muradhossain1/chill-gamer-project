import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import AllReviewCard from "../Components/AllReviewCard";
import Benefits from "../Components/Benefits";
import MobileRespons from "../Components/MobileRespons";


const Home = () => {
    const reviews = useLoaderData();

    return (
        <div>
            <div><Banner></Banner></div>

            <div>
                <h2 className="text-2xl md:text-4xl text-center font-bold ">Highest Rated Game Section</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-32 mt-8 gap-6">
                    {
                        reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                    }
                </div>
            </div>
            <div>
                <MobileRespons></MobileRespons>
                <Benefits></Benefits>
            </div>
        </div>
    );
};

export default Home;