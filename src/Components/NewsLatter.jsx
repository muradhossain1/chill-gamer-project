import Swal from "sweetalert2";


const NewsLetter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        console.log(email)
        Swal.fire({
            title: 'success!',
            text: 'Subcribe Your Email Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
        })
        form.reset();
    }
    return (
        <div className="hero rounded-lg md:px-12 lg:px-28  mt-12">
            <div className="flex flex-col md:flex-row ">
                <div className="md:w-1/2 ">
                    <img
                        src="https://i.ibb.co.com/3ztt1w2/news-Latter.webp"
                        className=" rounded-lg shadow-xl" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div className=" mt-8 md:mt-0 px-4 md:p-8">
                        <h1 className="text-4xl font-bold">Our Newsletter</h1>
                        <p className="py-4 text-lg font-medium text-gray-500">
                            Keep up our latest news and events. Subscribe our Newsletter.
                        </p>
                        <form onSubmit={handleSubscribe} className=" ">
                            <div className="join">
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered join-item" placeholder="Enter Your Email" />
                                <button className="btn btn-primary join-item rounded-r-lg">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;