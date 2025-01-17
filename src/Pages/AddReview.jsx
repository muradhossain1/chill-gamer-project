import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const AddReview = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleAddReviews = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genres = form.genres.value;

        const newAddReviews = { photo, title, description, rating, year, genres, email: user?.email, name: user?.displayName, }

        fetch('https://assignment-10-server-lake-xi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddReviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Reviews successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    e.target.reset();
                    navigate('/myReviews')
                }
            })
    }
    return (
        <div className='md:px-12 lg:px-28 mt-[4.2rem]'>
            <div className="text-center py-8">
                <h1 className="text-2xl md:text-4xl font-bold">Add Reviews for game!</h1>
            </div>
            <div className="card bg-base-200 w-full shrink-0 ">
                <form onSubmit={handleAddReviews} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Game Cover Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Game Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Game title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </label>
                            <input type="number" name='rating' min='1' max='5' placeholder="Rating for (e.g., 1-5)" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Publishing year</span>
                            </label>
                            <input type="number" name='year' min='2001' max='2024' placeholder="Publishing year (e.g., 2024)" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Genres</span>
                            </label>
                            <select name='genres' className="input input-bordered"  >
                                <option value="">Select Genres</option>
                                <option value="Action">Action</option>
                                <option value="RPG">RPG</option>
                                <option value="Adventure">Adventure</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Reviews</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
