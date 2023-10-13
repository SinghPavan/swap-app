"use client";
import { useState } from "react";
import { useZxing } from "react-zxing";
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

export const Picture = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      console.log("hi", result);
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};

export default Picture;





