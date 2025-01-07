import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import AllReviewCard from "../Components/AllReviewCard";
import Benefits from "../Components/Benefits";
import MobileRespons from "../Components/MobileRespons";
import NewsLatter from "../Components/NewsLatter";


const Home = () => {
    const reviews = useLoaderData();

    return (
        <div>
            <div><Banner></Banner></div>

            <div>
                <h2 className="text-2xl md:text-4xl text-center font-bold mt-8 ">Highest Rated Game Section</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-28 mt-8 gap-6">
                    {
                        reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                    }
                </div>
            </div>
            <div>
                <MobileRespons></MobileRespons>
                <Benefits></Benefits>
                <NewsLatter></NewsLatter>
            </div>
        </div>
    );
};

export default Home;