"use client";
import { GoalsContext } from "@/app/goals/page";
import Image from "next/image";
import React, { useContext } from "react";

const GoalSetting = () => {
  // const [goalPoints, setGoalPoints] = useState({
  //   health: 3,
  //   wellbeing: 3,
  //   smarter: 3,
  //   sustainable: 3,
  //   community: 3,
  // });
  const { goalPoints, setGoalPoints } = useContext(GoalsContext);
  console.log("goals", goalPoints);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setGoalPoints({ ...goalPoints, [name]: Number(value) });
    console.log("first", goalPoints);
  };

  return (
    <div className="goals-changer flex flex-col w-full">
      <div className="health">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-2 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/health.svg"
            alt="Prioritise health icon"
            width={27}
            height={27}
          />
          Prioritise health
        </label>
        <div className="w-full  relative">
          <input
            type="range"
            min="1"
            max="5"
            value={goalPoints.health}
            onChange={(e) => handleChange(e)}
            name="health"
            className={`range-input health range-input-${goalPoints.health} w-full bg-white h-2 rounded-full `}
          />
          <div
            className="h-8 w-8 bg-lightPink rounded-full absolute -top-1 text-black flex justify-center items-center"
            style={{ left: `${23 * (goalPoints.health - 1)}%` }}
          >
            {goalPoints.health}
          </div>
        </div>
      </div>
      <div className="wellbeing">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-2 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/wellbeing.svg"
            alt="Enhance wellbeing icon"
            width={27}
            height={27}
          />
          Enhance wellbeing
        </label>
        <div className="w-full  relative">
          <input
            type="range"
            min="1"
            max="5"
            value={goalPoints.wellbeing}
            onChange={(e) => handleChange(e)}
            name="wellbeing"
            className={`range-input wellbeing range-input-${goalPoints.wellbeing} w-full bg-white h-2 rounded-full `}
          />
          <div
            className="h-8 w-8 bg-lightPurple rounded-full absolute -top-1 text-black flex justify-center items-center"
            style={{ left: `${23 * (goalPoints.wellbeing - 1)}%` }}
          >
            {goalPoints.wellbeing}
          </div>
        </div>
      </div>
      <div className="smarter">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-2 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/smarter.svg"
            alt="Save smarter icon"
            width={27}
            height={27}
          />
          Save smarter
        </label>
        <div className="w-full  relative">
          <input
            type="range"
            min="1"
            max="5"
            value={goalPoints.smarter}
            onChange={(e) => handleChange(e)}
            name="smarter"
            className={`range-input smarter range-input-${goalPoints.smarter} w-full bg-white h-2 rounded-full `}
          />
          <div
            className="h-8 w-8 bg-lightGreen rounded-full absolute -top-1 text-black flex justify-center items-center"
            style={{ left: `${23 * (goalPoints.smarter - 1)}%` }}
          >
            {goalPoints.smarter}
          </div>
        </div>
      </div>
      <div className="sustainable">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-2 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/sustainable.svg"
            alt="Go sustainable icon"
            width={27}
            height={27}
          />
          Go sustainable
        </label>
        <div className="w-full  relative">
          <input
            type="range"
            min="1"
            max="5"
            value={goalPoints.sustainable}
            onChange={(e) => handleChange(e)}
            name="sustainable"
            className={`range-input sustainable range-input-${goalPoints.sustainable} w-full bg-white h-2 rounded-full `}
          />
          <div
            className="h-8 w-8 bg-lightYellow rounded-full absolute -top-1 text-black flex justify-center items-center"
            style={{ left: `${23 * (goalPoints.sustainable - 1)}%` }}
          >
            {goalPoints.sustainable}
          </div>
        </div>
      </div>
      <div className="community">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-2 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/sustainable.svg"
            alt="Strengthen community"
            width={27}
            height={27}
          />
          Strengthen community
        </label>
        <div className="w-full  relative">
          <input
            type="range"
            min="1"
            max="5"
            value={goalPoints.community}
            onChange={(e) => handleChange(e)}
            name="community"
            className={`range-input community range-input-${goalPoints.community} w-full bg-white h-2 rounded-full `}
          />
          <div
            className="h-8 w-8 bg-lightOrange rounded-full absolute -top-1 text-black flex justify-center items-center"
            style={{ left: `${23 * (goalPoints.community - 1)}%` }}
          >
            {goalPoints.community}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSetting;
