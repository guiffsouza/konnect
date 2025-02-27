"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IStepContext } from "./Interface";

export const StepContext = createContext<IStepContext | undefined>(undefined);

export const StepProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <StepContext.Provider
      value={{
        step,
        nextStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
