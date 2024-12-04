import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";


const AllReviews = () => {
    const reviews = useLoaderData();
    
    return (
        <div>
            All review : {reviews.length}
            <div className="grid md:grid-cols-3 px-32 gap-6">
                {
                    reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;