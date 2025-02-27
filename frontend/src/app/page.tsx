import Main from "@/components/Main/main";
import { Payment } from "@/components/Payment/Payment";
import { useStepContext } from "@/context/StepContext/useStep";

export default function Home() {
  // const { step } = useStepContext();
  const steps = [<Main />, <Payment />];
  return <Main />;
  // return steps[step];
}
