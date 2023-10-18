"use client";
import { useEffect, useState } from "react";
import * as ZXing from "@zxing/library";
import Image from "next/image";
import { useRouter } from "next/navigation";


export const Picture = () => {
  const [barCodeResult, setBarCodeResult] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const [codeReader, SetCodeReader] = useState(
    new ZXing.BrowserMultiFormatReader()
  );
  const router = useRouter();

  let selectedDeviceId;

  useEffect(() => {
    console.log("ZXing code reader initialized");
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        selectedDeviceId = videoInputDevices[0].deviceId;
        if (videoInputDevices.length >= 1) {
          videoInputDevices.forEach((element) => {});
        }
      })
      .catch((err) => {
        console.error(err);
      });

    setBarCodeResult("");
    setCameraOn(false);
    startCamera();
  }, [selectedDeviceId, barCodeResult]);

  const startCamera = () => {
    if (!cameraOn) {
      codeReader.decodeFromVideoDevice(undefined, "video", (result, err) => {
        setCameraOn(true);
        if (result) {
          console.log(result);
          setBarCodeResult(result.text);
          codeReader.reset();
          codeReader.stopContinuousDecode();
          SetCodeReader(new ZXing.BrowserMultiFormatReader());
          router.push("results");
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
          console.error(err);
          setBarCodeResult(err);
        }
      });
      // console.log(barCodeResult);

      console.log(
        `Started continous decode from camera with id ${selectedDeviceId}`
      );
    } else {
      codeReader.reset();
      codeReader.stopContinuousDecode();
      SetCodeReader(new ZXing.BrowserMultiFormatReader());
      setCameraOn(false);
      setBarCodeResult("");
      console.log("Reset.");
    }
    setCameraOn(false);
  };

  const navigateToResultPage = () => {
    router.push("results");
  }

  // const resetCamera = () => {

  // }
  

  return (
    // <div
    //   className={`${
    //     cameraOn ? "h-full" : "subtract mix-blend-multiply h-full"
    //   }`}
    // >
      <div className={`${cameraOn ? "h-full subtract" : "subtract h-full"}`}>
      {/* <h1  className="text-center text-3xl pt-8 text-white font-bold">Scan product</h1> */}

      {/* <div className="subtract mix-blend-multiply"> */}

      <div className="backdrop-blur-none flex flex-col items-center">
        <h1 className="text-center text-3xl pt-8 text-white font-bold">
          Scan product
        </h1>
        {/* <Image className="rotate-12 bg-lightBlue" width={"3270.942px"} height={"2439.952px"} /> */}
        <div className="h-96 mt-16 bg-black rounded-[25px] w-full">
          {/* <div className="h-[400px] mt-24 bg-white rounded-[200px]"> */}
          {/* <div className="h-96 mt-[30%] bg-white rounded-[100px]"> */}
          <video
            id="video"
            className="w-full h-full object-fill rounded-[25px]"
          ></video>
        </div>
        <div className="mt-10">
          <a className="button shrink-0" id="startButton" onClick={navigateToResultPage}>
        
          <Image
              src={"/assets/scan-button.svg"}
              alt="scanButton"
              width={80}
              height={80}
            />
    
 
          </a>
          {/* <a className="button" id="resetButton" onClick={resetCamera}>Reset</a> */}
        </div>
        {/* <div id="sourceSelectPanel" style={{display:"none"}}>
        <label for="sourceSelect">Change video source:</label>
        <select id="sourceSelect" style={{"max-width":"400px"}}>
        </select>
      </div> */}
        {/* <label>Result: {barCodeResult}</label>
      <pre><code id="result"></code></pre> */}
        
      </div>
    </div>
  );
};



export default Picture;
