// "use client";
import Picture from "@/components/camera";
import React from "react";

const Scan = () => {
  return (
    <div className="cameraBlur slide-in-element">
      <div className="camera">
        {/* <div className="bg-lightGray mix-blend-multiply backdrop-blur-sm h-screen"> */}

        <Picture />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Scan;
