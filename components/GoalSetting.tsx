"use client";
import { GoalsContext, GoalsContextType } from "@/utils/context";
import Image from "next/image";
import React, { useContext } from "react";

const GoalSetting = () => {
  const contextValue = useContext(GoalsContext);
  if (!contextValue) {
    return null;
  }
  const { goalPoints, setGoalPoints } = contextValue;
  console.log("goals", goalPoints);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "health") {
      const newValue = Number(value);
      const goalMetrices = { ...goalPoints };
      if (goalPoints.health < newValue) {
        if (goalPoints.health < 5) {
          goalMetrices.health = newValue;
        }
        if (goalPoints.wellbeing <= newValue && goalPoints.wellbeing < 5) {
          goalMetrices.wellbeing += 1;
        }
        if (goalPoints.smarter > 2) {
          goalMetrices.smarter -= 1;
        }
        if (goalPoints.sustainable <= newValue && goalPoints.sustainable < 5) {
          goalMetrices.sustainable += 1;
        }
        if (newValue > 4 && goalPoints.community < 5) {
          goalMetrices.community += 1;
        }
      } else {
        if (goalPoints.health >= 1) {
          goalMetrices.health = newValue;
        }
        if (goalPoints.wellbeing >= newValue && goalPoints.wellbeing > 1) {
          goalMetrices.wellbeing -= 1;
        }
        if (goalPoints.smarter < 4) {
          goalMetrices.smarter += 1;
        }
        if (goalPoints.sustainable > 2) {
          goalMetrices.sustainable -= 1;
        }
        if (goalPoints.health < 2) {
          goalMetrices.community -= 1;
        }
      }
      setGoalPoints({ ...goalMetrices });
    } else if (name === "smarter") {
      const newValue = Number(value);
      const goalMetrices = { ...goalPoints };
      if (goalPoints.smarter < newValue) {
        if (goalPoints.smarter >= 1) {
          goalMetrices.smarter = newValue;
        }
        if (newValue > 2 && goalMetrices.health > 1) {
          goalMetrices.health -= 1;
        }
        if (newValue > 2 && goalMetrices.wellbeing > 1) {
          goalMetrices.wellbeing -= 1;
        }
        if (newValue > 2 && goalMetrices.sustainable > 1) {
          goalMetrices.sustainable -= 1;
        }
        if (newValue > 4 && goalMetrices.community > 1) {
          goalMetrices.community -= 1;
        }
      } else {
        if (goalPoints.smarter >= 1) {
          goalMetrices.smarter = newValue;
        }
        if (goalMetrices.health < 5) {
          goalMetrices.health += 1;
        }
        if (goalMetrices.wellbeing < 5) {
          goalMetrices.wellbeing += 1;
        }
        if (goalMetrices.sustainable < 5) {
          goalMetrices.sustainable += 1;
        }
        if (goalMetrices.community < 5) {
          goalMetrices.community += 1;
        }
      }
      setGoalPoints({ ...goalMetrices });
    } else {
      setGoalPoints({ ...goalPoints, [name]: Number(value) });
    }

    // if (name === "health") {
    //   const newValue = Number(value);
    //   const newAffordabilityValue =
    //     goalPoints.smarter - (newValue - goalPoints.health);

    //   setGoalPoints({
    //     ...goalPoints,
    //     [name]: newValue,
    //     smarter: newAffordabilityValue,
    //     wellbeing: newValue,
    //     sustainable: newValue,
    //     community: newValue,
    //   });
    // } else if (name === "wellbeing") {
    //   const newValue = Number(value);
    //   const newAffordabilityValue =
    //     goalPoints.smarter - (newValue - goalPoints.health);

    //   setGoalPoints({
    //     ...goalPoints,
    //     [name]: newValue,
    //     smarter: newAffordabilityValue,
    //     health: newValue,
    //     sustainable: newValue,
    //     community: newValue,
    //   });
    // } else if (name === "smarter") {
    //   const newValue = Number(value);
    //   const newAffordabilityValue =
    //     goalPoints.health - (newValue - goalPoints.smarter);

    //   setGoalPoints({
    //     ...goalPoints,
    //     [name]: newValue,
    //     health: newAffordabilityValue,
    //     wellbeing: newAffordabilityValue,
    //     community: newAffordabilityValue,
    //   });
    // } else {
    // setGoalPoints({ ...goalPoints, [name]: Number(value) });
    // }
  };

  return (
    <div className="goals-changer flex flex-col w-full">
      <div className="health mb-4">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-1 text-sm  text-white font-bold dark:text-white "
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
      <div className="wellbeing mb-4">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-1 text-sm  text-white font-bold dark:text-white "
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
      <div className="smarter mb-4">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-1 text-sm  text-white font-bold dark:text-white "
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
      <div className="sustainable mb-4">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-1 text-sm  text-white font-bold dark:text-white "
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
      <div className="community mb-4">
        <label
          htmlFor="steps-range"
          className="inline-flex items-center gap-2 mb-1 text-sm  text-white font-bold dark:text-white "
        >
          <Image
            src="/assets/community.svg"
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
