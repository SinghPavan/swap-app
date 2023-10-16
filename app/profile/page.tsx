"use client";
import GoalsChart from "@/components/GoalChart";
import AppNavigation from "@/components/appNavigation";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/molecules/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tipsData = [
  {
    icon: "/assets/tip.svg",
    title: "Scan product",
    description: "Tip about scanning product, how to reach your goals easier.",
    button: "Scan a product",
    route: "/scan",
  },
  {
    icon: "/assets/tip.svg",
    title: "Scan product",
    description: "Tip about scanning product, how to reach your goals easier.",
    button: "Scan a product",
    route: "/scan",
  },
];

const profile = () => {
  const [value, setValue] = useState([{}]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chartState"));
    setValue(data);
  }, []);

  return (
    <div className="profile flex flex-col items-center px-4 slide-in-element">
      <p className=" text-xl text-center mt-5 mb-2.5">Profile</p>
      <Image
        src={"/assets/profile.svg"}
        alt="profileImage"
        width={225}
        height={225}
      />
      <p className="text-2xl mt-4 text-lightYellow font-black ">Alison Smith</p>
      <p className="text-center text-sm ">
        Earn more points to unlock rewards and support sustainable initiatives
      </p>
      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-2xl text-lightYellow ">Your Goals</p>
        <Link href="/goals">
          <p className="flex ">
            <Image
              src={"/assets/edit_icon.svg"}
              alt="Edit Icon"
              width={24}
              height={24}
            />
            Edit
          </p>
        </Link>
      </div>
      <div className="chart">
        <GoalsChart data={value} />
      </div>
      <div className="tips">
        <h3>Tips and Tricks</h3>
        <div className="tips-card">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {tipsData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* <OffsetCard prop={item} /> */}
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      <AppNavigation />
    </div>
  );
};
export default profile;
