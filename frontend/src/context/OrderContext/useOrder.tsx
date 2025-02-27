import { useContext } from "react";
import { IOrderContext } from "./Interface";
import { OrderContext } from "./OrderContext";

export const useOrderContext = (): IOrderContext => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used inside a OrderProvider");
  }
  return context;
};
