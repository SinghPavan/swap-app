"use client";
import { useEffect, useState } from "react";
// import { useZxing } from "react-zxing";
// import {Html5QrcodeScanner} from "html5-qrcode";
import * as ZXing from '@zxing/library';
import Image from "next/image";
import { useRouter } from "next/navigation";
export const Picture = () => {

  const [barCodeResult, setBarCodeResult] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const [codeReader, SetCodeReader] = useState(new ZXing.BrowserMultiFormatReader());
  const router = useRouter()

  // function onScanSuccess(decodedText, decodedResult) {
  //   // handle the scanned code as you like, for example:
  //   console.log(`Code matched = ${decodedText}`, decodedResult);
  // }
  
  // function onScanFailure(error) {
  //   // handle scan failure, usually better to ignore and keep scanning.
  //   // for example:
  //   // console.warn(`Code scan error = ${error}`);
  // }
  // useEffect(()=>{
  //   let html5QrcodeScanner = new Html5QrcodeScanner(
  //     "reader",
  //     { fps: 10, qrbox: {width: 300, height: 200} },
  //     /* verbose= */ false);
  //     html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  //     return () => {
  //       html5QrcodeScanner.clear();
  //     }
  // }, [])
  let selectedDeviceId;

  // const codeReader = 
  
  useEffect(() => {
    
    
    
    console.log('ZXing code reader initialized')
    codeReader.listVideoInputDevices()
      .then((videoInputDevices) => {
        // const sourceSelect = document.getElementById('sourceSelect')
        selectedDeviceId = videoInputDevices[0].deviceId
        if (videoInputDevices.length >= 1) {
          console.log("Hi 5");
          videoInputDevices.forEach((element) => {
            // const sourceOption = document.createElement('option')
            // sourceOption.text = element.label
            // sourceOption.value = element.deviceId
            // sourceSelect.appendChild(sourceOption)
          })

          // sourceSelect.onchange = () => {
          //   selectedDeviceId = sourceSelect.value;
          // };

          // const sourceSelectPanel = document.getElementById('sourceSelectPanel')
          // sourceSelectPanel.style.display = 'block'
        }

        // document.getElementById('startButton').addEventListener('click', () => {
          
        // })

        // document.getElementById('resetButton').addEventListener('click', () => {
          
        // })
        

      })
      .catch((err) => {
        console.error(err)
      })
      console.log("Hi 4");
      setBarCodeResult('');
      setCameraOn(false);
      // console.log(barCodeResult);
  }, [selectedDeviceId, barCodeResult])

  const startCamera = () => {
    console.log("Hi 1");
    if(!cameraOn){
      console.log("Hi 2");
    codeReader.decodeFromVideoDevice(undefined, 'video', (result, err) => {
      setCameraOn(true)
      if (result) {
        console.log(result)
        setBarCodeResult(result.text);
        codeReader.reset();
        codeReader.stopContinuousDecode();
        SetCodeReader(new ZXing.BrowserMultiFormatReader())
        router.push('profile');
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err)
        setBarCodeResult(err)
      }
    })
    // console.log(barCodeResult);
    
    console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
  }else{
    console.log("Hi 3");
    codeReader.reset();
    codeReader.stopContinuousDecode();
    SetCodeReader(new ZXing.BrowserMultiFormatReader())
    setCameraOn(false);
    setBarCodeResult('');
    console.log('Reset.', cameraOn, barCodeResult);
  }
  setCameraOn(false);
  }

  // const resetCamera = () => {
    
  // }
  
 
return (
  <div className={`${cameraOn ? "h-full" : "subtract mix-blend-multiply h-full"}`}> 
    
    {/* <div className={`${cameraOn ? "h-full subtract" : "subtract h-full"}`}> */}
      {/* <h1  className="text-center text-3xl pt-8 text-white font-bold">Scan product</h1> */}
    
      {/* <div className="subtract mix-blend-multiply"> */}


  <div className="backdrop-blur-none flex flex-col items-center">
  <h1  className="text-center text-3xl pt-8 text-white font-bold">Scan product</h1>
    {/* <Image className="rotate-12 bg-lightBlue" width={"3270.942px"} height={"2439.952px"} /> */}
    <div className="h-96 mt-16 bg-white rounded-[100px] w-full">
    {/* <div className="h-[400px] mt-24 bg-white rounded-[200px]"> */}
    {/* <div className="h-96 mt-[30%] bg-white rounded-[100px]"> */}
      <video  id="video" className="w-full h-full object-fill rounded-[100px]"></video> 
    </div>
    <div className="mt-10">
      
      <a className="button shrink-0" id="startButton" onClick={startCamera}><Image src={"/assets/scan-button.svg"} alt="scanButton" width={93} height={93} /></a>
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
}
// import React, { useState } from 'react';

// const Picture = () => {
//     // useClient
//   const [photo, setPhoto] = useState('');

//   const handleCapture = () => {
//     const cameraOptions = { video: true, audio: false };
//     navigator.mediaDevices.getUserMedia(cameraOptions)
//       .then((stream) => {
//         const video = document.createElement('video');
//         video.srcObject = stream;
//         video.play();
//         const canvas = document.createElement('canvas');
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         const context = canvas.getContext('2d');
//         context.drawImage(video, 0, 0, canvas.width, canvas.height);
//         const image = canvas.toDataURL('image/png');
//         setPhoto(image);
//         stream.getTracks().forEach((track) => track.stop());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       {photo ? (
//         <img src={photo} alt="captured" className="w-full h-auto" />
//       ) : (
//         <button onClick={handleCapture} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Take a picture
//         </button>
//       )}
//     </div>
//   );
// };

// export const Picture = () => {
//   const [result, setResult] = useState("");
//   const { ref } = useZxing({
//     onDecodeResult(result) {
//       console.log("hi", result);
//       setResult(result.getText());
//     },
//   });

//   return (
//     <>
//       <video ref={ref} />
//       <p>
//         <span>Last result:</span>
//         <span>{result}</span>
//       </p>
//     </>
//   );
// };

export default Picture;





