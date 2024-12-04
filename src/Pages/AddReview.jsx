import Swal from "sweetalert2";


const AddReview = () => {

    const handleAddReviews = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genres = form.genres.value;
        const email = form.email.value;
        const name = form.name.value;

        const newAddReviews = {photo, title, description, rating, year, genres, email, name}
        console.log(newAddReviews)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newAddReviews)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Reviews successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }
    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Reviews for game!</h1>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddReviews} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Game Cover Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Game Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Game title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Publishing year</span>
                            </label>
                            <input type="text" name='year' placeholder="Publishing year" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Genres</span>
                            </label>
                            <input type="text" name='genres' placeholder="Genres" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form 4th row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" name='email' placeholder="User email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
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