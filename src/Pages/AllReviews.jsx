import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../Components/AllReviewCard";
import { useState } from "react";


const AllReviews = () => {
    const loadedReviews = useLoaderData();
    const [reviews, setReviews] = useState(loadedReviews)
    const [sort, setSort] = useState('');

    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === 'Rating'){
            const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
            setReviews(sortedReviews)
        }
        if(sortType === 'Year'){
            const sortedReviews = [...reviews].sort((a, b) => b.year - a.year);
            setReviews(sortedReviews)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-[4.3rem] md:px-12 lg:px-28">
                <h2 className="text-2xl md:text-4xl font-bold py-8">All Reviews Cill Gamer</h2>
                <details className="dropdown">
                    <summary className="btn btn-primary m-1">
                        {sort ? `Sort by: ${sort}` : 'Sort by'}
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-semibold">
                        <li onClick={() => handleSort('Rating')}><a>Sort by Rating</a></li>
                        <li onClick={() => handleSort('Year')}><a>Sort by Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-28 gap-6">
                {
                    reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;