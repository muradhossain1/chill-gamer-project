

const Banner = () => {
    return (
        <div className="border p-6 md:w-2/3 mx-auto rounded-xl my-10">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/gvQL6n9/witcher.jpg"
                        className="w-full rounded-lg relative" />
                    <div className="absolute hidden lg:block top-80 left-44 py-6 px-10 text-center bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl text-white ">
                        <h2 className="text-xl font-bold mb-2">Explore the Best RPG Games</h2>
                        <p className="text-base font-serif text-gray-200">Delve into immersive worlds, epic quests, and unforgettable <br /> stories.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/Yy14mDF/red-dead-redemption-2.jpg"
                        className="w-full rounded-lg" />
                     <div className="absolute hidden lg:block top-80 right-6 py-6 px-10 text-center bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl text-white ">
                        <h2 className="text-xl font-bold mb-2">Join the Gaming Community</h2>
                        <p className="text-base font-serif text-gray-200">Share your thoughts, read reviews, and discover new favorites with <br /> Chill Gamer!</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/7VZ3gFD/ghost-of-tsushima.jpg"
                        className="w-full rounded-lg" />
                      <div className="absolute hidden lg:block top-80 left-6 py-6 px-10 text-center bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl text-white ">
                        <h2 className="text-xl font-bold mb-2">Find Your Next Adventure</h2>
                        <p className="text-base font-serif text-gray-200">With thousands of games to explore, your next adventure <br /> awaits!</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;