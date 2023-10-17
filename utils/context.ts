import React, { createContext } from "react";

export interface GoalsContextType {
    goalPoints: {
      health: number;
      wellbeing: number;
      smarter: number;
      sustainable: number;
      community: number;
    };
    setGoalPoints: React.Dispatch<React.SetStateAction<{
      health: number;
      wellbeing: number;
      smarter: number;
      sustainable: number;
      community: number;
    }>>;
  }
  
  export const GoalsContext = createContext<GoalsContextType | null>(null);