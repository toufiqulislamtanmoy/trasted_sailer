import Link from "next/link";
import SwiperCara from "./SwiperCara";

const Hero = () => {
    return (
        <div className="bg-[#F2F5FC] p-10 my-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <SwiperCara />
                <div className="flex items-start flex-col justify-center">
                    <h1 className="text-5xl font-bold text-[#4899ED]">Gaming Currency Hub!</h1>
                    <p className="py-6">Fuel your gaming adventures at our one-stop currency hub! Explore a wide selection of in-game treasures and level up your gameplay instantly.</p>
                    <Link href="/cardlist" className="bg-[#4999ED] text-white px-3 py-3 rounded-2xl">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;