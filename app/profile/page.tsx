import Image from "next/image";
import React from "react";

const profile = () => {
  return (
    <div className="profile flex flex-col items-center px-4">
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
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl text-lightYellow font-black not-italic tracking-wide w-full pl-4  mb-2.5">
          Your Goals
        </p>
        <p className="flex ">
          <Image
            src={"/assets/edit_icon.svg"}
            alt="Edit Icon"
            width={24}
            height={24}
          />
          Edit
        </p>
      </div>
    </div>
  );
};
export default profile;
