import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";


const AllReviews = () => {
    const reviews = useLoaderData();
    
    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center font-bold py-8">All Reviews Cill Gamer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-32 gap-6">
                {
                    reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;