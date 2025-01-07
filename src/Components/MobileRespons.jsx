

const MobileRespons = () => {
    return (
        <div className="md:px-12 lg:px-28">
            <div className="hero bg-base-200 mt-12 p-8 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-6">
                    <img
                        src="https://i.ibb.co.com/VmP2HMB/mobile-responsive.webp"
                        className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className="lg:w-1/2 space-y-3 ml-6">
                        <p className="text-xl font-semibold text-green-600">--- 100% responsive</p>
                        <h1 className="text-3xl md:text-5xl font-bold ">Mobile device optimization</h1>
                        <div className=" flex gap-3 items-center pt-4 text-gray-600">
                            <p ><span className="text-white bg-green-400 px-3 py-[6px] rounded-full ">1</span></p>
                            <p><span className="text-xl font-semibold">Absolutely all scrollable sections support <br /> swipe effect.</span></p>
                        </div>
                        <div className="mt-4 flex gap-3 items-center text-gray-600">
                            <p ><span className="text-white bg-green-400 px-3 py-[6px] rounded-full ">2</span></p>
                            <p><span className="text-xl font-semibold">The theme uses mobile friendly sliders <br /> revolution & Swiper</span></p>
                        </div>
                        <div className="mt-4 flex gap-3 items-center text-gray-600">
                            <p ><span className="text-white bg-green-400 px-3 py-[6px] rounded-full ">3</span></p>
                            <p><span className="text-xl font-semibold">Fully responsive layout & retina ready</span></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileRespons;