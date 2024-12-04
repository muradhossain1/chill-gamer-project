import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import AllReviewCard from "../Components/AllReviewCard";


const Home = () => {
    const reviews = useLoaderData();

    return (
        <div>
            <div><Banner></Banner></div>
            <div className="grid md:grid-cols-3 px-32 gap-6">
                {
                    reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default Home;