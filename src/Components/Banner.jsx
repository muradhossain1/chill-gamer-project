import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Banner = () => {
    return (
        <div className="carousel w-full md:px-12 lg:px-28 mt-[4.3rem]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-lg'
            >
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/gvQL6n9/witcher.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Explore the RPG Games
                                </h1>
                                <p className="text-gray-300 mt-2">Delve into immersive worlds, epic quests, and unforgettable stories.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/Yy14mDF/red-dead-redemption-2.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Join the Gaming Community
                                </h1>
                                <p className="text-gray-300 mt-2">Share your thoughts, read reviews, and discover new favorites with Chill Gamer!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[28rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/7VZ3gFD/ghost-of-tsushima.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                Find Your Next Adventure
                                </h1>
                                <p className="text-gray-300 mt-2">With thousands of games to explore, your next adventure awaits!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;

