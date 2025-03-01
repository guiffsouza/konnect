"use client";

import { Header } from "../Header/Header";
import { TicketsGroup } from "../TicketsGroup/TicketsGroup";
import { ResumeOrder } from "../ResumeOrder/ResumeOrder";
import { useStepContext } from "@/context/StepContext/useStep";
import { Payment } from "../Payment/Payment";

export default function Main() {
  const { step } = useStepContext();

  const steps = [<ResumeOrder key="resumeOrder" />, <Payment key="payment" />];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px]">
        <Header />
        <div className="flex w-[1440px]">
          <TicketsGroup />
          {steps[step]}
        </div>
      </div>
    </div>
  );
}
