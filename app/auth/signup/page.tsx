import SignUpForm from "@/components/SignUpForm";
import React, { FormEvent } from "react";
const Signup = () => {
  return (
    <div className="signup px-4 ">
      <div className="heading mb-4 pt-12">
        <h1 className="text-3xl bold text-lightYellow mb-2">
          Create an account
        </h1>
        <p className="text-base">
          Welcome to SWAP! Let us help you set up your own account and help set
          up your goals. Let’s start with the basics.....
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default Signup;
