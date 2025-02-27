import { OrderProvider } from "@/context/OrderContext/OrderContext";
import { StepProvider } from "@/context/StepContext/StepContext";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StepProvider>
    <OrderProvider>{children}</OrderProvider>
    // </StepProvider>
  );
}
