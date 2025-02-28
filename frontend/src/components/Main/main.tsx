"use client";

import { Header } from "../Header/Header";
import { SeatsGroup } from "../SeatsGroup/SeatsGroup";
import { ResumeOrder } from "../ResumeOrder/ResumeOrder";
import { useStepContext } from "@/context/StepContext/useStep";
import { Payment } from "../Payment/Payment";

export default function Main() {
  const { step } = useStepContext();
  const steps = [<ResumeOrder />, <Payment />];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px]">
        <Header />
        <div className="flex w-[1440px]">
          <SeatsGroup />
          {steps[step]}
        </div>
      </div>
    </div>
  );
}
