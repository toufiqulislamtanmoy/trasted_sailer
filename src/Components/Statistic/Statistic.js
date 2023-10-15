"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../SectionTitle/SectionTitle";
import CountUp from 'react-countup';
const Statistic = () => {
    return (
        <div className="my-10 text-center mx-5">
            <SectionTitle title={"Statistic"} />


            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                <div className="card w-full  shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-extrabold text-[#4899ED] text-center">Total User</h2>
                        <CountUp start={0} end={33641} delay={1}>
                            {({ countUpRef }) => (
                                <div className="my-5">
                                    <span className="text-2xl font-bold text-[#4899ED]" ref={countUpRef}>
                                    </span>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

                {/*  */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-extrabold text-[#4899ED] text-center">Total Views</h2>
                        <CountUp start={0} end={7026441} delay={1}>
                            {({ countUpRef }) => (
                                <div className="my-5">
                                    <span className="text-2xl font-bold text-[#4899ED]" ref={countUpRef}>
                                    </span>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>
                
                {/*  */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-extrabold text-[#4899ED] text-center">Total Transaction</h2>
                        <CountUp start={0} end={26441} delay={1}>
                            {({ countUpRef }) => (
                                <div className="my-5">
                                    <span className="text-2xl font-bold text-[#4899ED]" ref={countUpRef}>
                                    </span>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Statistic;