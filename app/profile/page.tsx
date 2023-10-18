"use client";
import GoalsChart from "@/components/GoalChart";
import AppNavigation from "@/components/appNavigation";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";

import Tips from "@/components/molecules/Tips";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tipsData = [
  {
    icon: "/assets/tips.svg",
    title: "Scan product",
    description: "Tip about scanning product, how to reach your goals easier.",
    button: "Scan a product",
    route: "/scan",
  },
  {
    icon: "/assets/green-space.svg",
    title: "Maintain green spaces",
    description:
      "Plant trees and maintain green spaces in your community to enhance... ",
    button: "Read more",
    route: "/scan",
  },
];

const Profile = () => {
  const [value, setValue] = useState([{}]);

  const [userData, setUserData]: any = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chartState")!);
    const userData = JSON.parse(localStorage.getItem("userData")!);
    setUserData(userData);
    setValue(data);
  }, []);

  return (
    <div className="profile flex flex-col items-center px-4 slide-in-element overflow-y-scroll overflow-x-hidden">
      {/* <p className=" text-xl text-center mt-5 mb-2.5">Profile</p> */}
      <Image
        src={"/assets/profile.jpg"}
        alt="profileImage"
        width={225}
        height={225}
        className="rounded-full"
      />
      <p className="text-2xl mt-4 text-lightYellow font-black  ">{`Good Afternoon, `}</p>
      <p className="text-2xl text-lightYellow font-black ">{`${userData?.firstname}`}</p>
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
      <div className="chart mb-25">
        <GoalsChart data={value} />
      </div>
      <div className="tips ">
        <h3 className="ml-36 text-2xl text-lightYellow mb-8">
          Tips and Tricks
        </h3>
        <div className="tips-card mb-32">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {tipsData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Tips tips={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <AppNavigation />
      <footer className="h-10 bg-primary absolute bottom-0 w-full z-10"></footer>
    </div>
  );
};
export default Profile;
