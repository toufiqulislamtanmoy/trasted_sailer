'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const SwiperCara = () => {
    return (
        <div className=''>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" autoplay={{ delay: 200 }} loop={true}>
                <SwiperSlide><img className='rounded-lg w-full' src="https://img.konami.com/kde_cms/eu_publish/uploads/2023_visual_fix-1024x576.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://wallpapers.com/images/hd/pubg-pictures-o3eqzdeil2265vdj.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://sm.ign.com/ign_in/screenshot/default/image006-38su_vhs7.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://liogaming.com/wp-content/uploads/2022/08/DLS-23-Release-Date-768x432.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://overseas-img.qq.com/upload/webplat/info/hwpglite/20191220/3115258147708.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg w-full' src="https://wallpapers.com/images/hd/pubg-pictures-o3eqzdeil2265vdj.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperCara;