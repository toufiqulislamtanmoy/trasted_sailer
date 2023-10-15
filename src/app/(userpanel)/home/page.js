import FrequentlyAskedQuestion from "@/Components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Hero from "@/Components/HeroSection/Hero";
import Statistic from "@/Components/Statistic/Statistic";
import WhatWeProvide from "@/Components/WhatWeProvide/WhatWeProvide";

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <WhatWeProvide/>
            <FrequentlyAskedQuestion/>
            <Statistic/>
        </div>
    );
};

export default HomePage;