"use client";
// import RadarChart from "@/components/RadarChart";
import GoalSetting from "@/components/GoalSetting";
import RadarChart2 from "@/components/RadarChart2";
import Image from "next/image";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";

export const GoalsContext = createContext({});

const SetGoals = () => {
  // const [value, setValue] = React.useState<number>(3);

  const [goalPoints, setGoalPoints] = useState({
    health: 3,
    wellbeing: 3,
    smarter: 3,
    sustainable: 3,
    community: 3,
  });

  const data = [
    { label: "health", value: goalPoints.health, color: "#F652C5" },
    { label: "wellbeing", value: goalPoints.wellbeing, color: "#91A6F2" },
    { label: "smarter", value: goalPoints.smarter, color: "#A3E1D2" },
    { label: "sustainable", value: goalPoints.sustainable, color: "#FEEC9A" },
    { label: "community", value: goalPoints.community, color: "#FEC38C" },
  ];

  return (
    <div className="px-12 flex flex-col items-center">
      <h1>Set your goals</h1>
      {/* <GoalsChart /> */}
      {/* <RadarChart data={data} /> */}
      <GoalsContext.Provider value={{ goalPoints, setGoalPoints }}>
        <RadarChart2 data={data} />
        <GoalSetting />
        <div className="button-container w-full flex justify-between">
          <Link href="/auth/signup/">
            <button type="button" className="w-full flex justify-center mt-12">
              <Image
                src="/assets/back_btn.svg"
                alt="back button"
                width={50}
                height={20}
              />
            </button>
          </Link>
          <Link href="/profile/">
            <button type="button" className="w-full flex justify-center mt-12">
              <Image
                src="/assets/next-btn.svg"
                alt="next button"
                width={50}
                height={20}
              />
            </button>
          </Link>
        </div>
      </GoalsContext.Provider>
    </div>
  );
};

export default SetGoals;
