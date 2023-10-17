import React, { createContext } from "react";

interface UserData {
  firstname: string;
  lastname: string;
}

// Define the type for the context value
interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = createContext<UserContextType | null>(null);

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