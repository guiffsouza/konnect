"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IOrderContext } from "./Interface";
import { seatsArray } from "@/mock/seats";
import { ISeat } from "@/Shared/Interfaces/interface";
import { IQueue } from "@/Shared/Interfaces/Queue";

export const OrderContext = createContext<IOrderContext | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [seats, setSeat] = useState<ISeat[]>(seatsArray);
  const [cart, setCart] = useState<ISeat[]>([]);
  const [ticktQueue, setTicketQuery] = useState<IQueue[]>([]);

  const selectionSeat = (newSeat: ISeat) => {
    const newState = seats.map((seat) =>
      seat.id === newSeat.id ? { ...seat, selected: !newSeat.selected } : seat
    );

    setSeat(newState);

    if (!newSeat.selected) {
      addToCart(newSeat);
    }

    if (newSeat.selected) {
      removeToCart(newSeat);
    }
  };

  const addToCart = (value: ISeat) => {
    const existSeat = cart.find((seat) => seat.id === value.id);
    if (!existSeat) {
      const newState = [...cart, value];
      setCart(newState);
    }
  };

  const removeToCart = (newSeat: ISeat) => {
    const newState = cart.filter((seat: ISeat) => seat.id !== newSeat.id);
    setCart(newState);
  };

  return (
    <OrderContext.Provider
      value={{
        selectionSeat,
        ticktQueue,
        seats,
        cart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
