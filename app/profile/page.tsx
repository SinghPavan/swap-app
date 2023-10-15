import Image from "next/image";
import React from "react";

const profile = () => {
  return (
  <div className="profile flex flex-col items-center">
    <p className=" text-xl text-center mt-5 mb-2.5">Profile</p>
    <div className="w-72 h-72 bg-lightBlue rounded-full border-black border-solid flex items-center flex-col overflow-hidden pt-20">
        <Image src={"/assets/profile-image-top.svg"} alt="profileImage" width={93} height={93}/>
        <Image src={"/assets/profile-image-top.svg"} alt="profileImage" width={150} height={150}/>
    </div>
    <p className="text-2xl mt-4 text-lightYellow font-black not-italic tracking-wide">Alison Smith</p>
    <p className="text-center text-sm font-normal not-italic mx-16 mt-1.5">Earn more points to unlock rewards and support sustainable initiatives</p>
    <p className="text-2xl text-lightYellow font-black not-italic tracking-wide w-full pl-4 mt-10 mb-2.5">Your Goals</p>
    <div className="w-80 h-10 bg-white rounded-full shadow-md shrink-0 mt-0.5 leading-10">
      <span className="text-black ml-2.5">Go Green and Sustainable</span>
    </div>
 </div>
 );
};
export default profile;
