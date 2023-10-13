import SSO from "@/components/SSO";
import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Signup = () => {
  return (
    <div className="signup px-4 ">
      <div className="heading mb-8 pt-12">
        <h1 className="text-3xl bold text-lightYellow mb-2">
          Create an account
        </h1>
        <p className="text-base">
          Welcome to SWAP! Let us help you set up your own account and help set
          up your goals. Let’s start with the basics.....
        </p>
      </div>
      <SignUpForm />
      <p className="text-xl my-8 ">
        <span className="font-bold">O</span>r
      </p>
      <SSO />
      <Link href="/goals">
        <button type="button" className="w-full flex justify-center mt-12">
          <Image
            src="/assets/next-btn.svg"
            alt="next button"
            width={50}
            height={20}
          />
        </button>
      </Link>
      <div className="status flex items-center justify-center gap-2 mt-8">
        <span className="bg-lightBlue h-1 w-12 block"></span>
        <span className="bg-white h-1 w-12 block"></span>
      </div>
    </div>
  );
};

export default Signup;
