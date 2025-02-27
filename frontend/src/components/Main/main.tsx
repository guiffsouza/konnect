"use client";

import { Header } from "../Header/Header";
import { SeatsGroup } from "../SeatsGroup/SeatsGroup";
import { ResumeOrder } from "../ResumeOrder/ResumeOrder";

export default function Main() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px]">
        <Header />
        <div className="flex w-[1440px]">
          <SeatsGroup />
          <ResumeOrder />
        </div>
      </div>
    </div>
  );
}
