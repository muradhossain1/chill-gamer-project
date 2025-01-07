

const About = () => {
    return (
        <div className="md:px-12 lg:px-28 mt-[4.2rem]">
            <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-12 md:gap-12 w-full">
                <div className=" md:w-1/2 mt-2">
                    <img className="w-full rounded-lg" src="https://i.ibb.co.com/Qj2z6zX/images-1.jpg" alt="" />
                </div>
                <div className="md:w-1/2  ">
                    <h2 className="text-4xl font-bold drop-shadow-xl">About us</h2>
                    <div className="md:ml-6">
                        <p className="font-bold text-xl text-gray-700 mt-4">Welcome to Chill Gamer!</p>
                        <p className="font-medium text-gray-600 mt-2">
                        At <span className="font-bold">Chill Gamer</span>, we believe that gaming is more than just a hobby  it is a way of life. Our mission is to create a laid-back, unbiased platform where gamers of all types can discover new games, share their experiences, and find honest, in-depth reviews.
                        </p>
                        <p className="mt-3 font-medium text-gray-600 ">
                        Whether you’re a hardcore competitive player or someone who loves to unwind with casual games, <span className="font-bold">Chill Gamer</span> offers a space where every gamer is welcome. We provide thoughtful and comprehensive reviews, covering everything from graphics and gameplay to storylines and user experience. Our goal is to help you make informed decisions about which games to play, based on the feedback from our community of passionate gamers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;