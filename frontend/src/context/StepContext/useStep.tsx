import { useContext } from "react";
import { IStepContext } from "./Interface";
import { StepContext } from "./StepContext";

export const useStepContext = (): IStepContext => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used inside a StepProvider");
  }
  return context;
};
