"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IOrderContext } from "./Interface";
import { mockTicketsSeats, mockTicketsQueue } from "@/mock/seats";
import { ITicketSeat } from "@/Shared/Interfaces/interface";
import { ITicketsQueue } from "@/Shared/Interfaces/Queue";
import { ICart } from "@/Shared/Interfaces/ICart";

export const OrderContext = createContext<IOrderContext | undefined>(undefined);
export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [seats, setSeat] = useState<ITicketSeat[]>(mockTicketsSeats);

  const [ticketQueue, setTicketQuery] =
    useState<ITicketsQueue[]>(mockTicketsQueue);

  const [cart, setCart] = useState<ICart>({
    ticketQueue: [],
    ticketSeat: [],
  });

  const selectionSeat = (newSeat: ITicketSeat) => {
    setSeat((prevSeat) => {
      return prevSeat.map((seat) =>
        seat.id === newSeat.id ? { ...seat, selected: !newSeat.selected } : seat
      );
    });

    if (!newSeat.selected) {
      addToCart("ticketSeat", newSeat);
    }

    if (newSeat.selected) {
      removeToCart(newSeat);
    }
  };

  const selectTicketQueue = () => {
    if (ticketQueue.length > 0) {
      const newTicket = ticketQueue.shift();
      addToCart("ticketQueue", newTicket as ITicketsQueue);
    }
  };

  const removeTicketQueueCart = () => {
    if (cart.ticketQueue.length > 0) {
      const newTicketQueue = [...cart.ticketQueue];
      newTicketQueue.pop();

      setCart((prevCart) => ({ ...prevCart, ticketQueue: newTicketQueue }));
    }
  };

  const addToCart = <K extends keyof typeof cart>(
    key: K,
    value: (typeof cart)[K][number]
  ) => {
    setCart((prevCart) =>
      prevCart[key].some((item) => item.id === value.id)
        ? prevCart
        : { ...prevCart, [key]: [...prevCart[key], value] }
    );
  };

  const removeToCart = (newSeat: ITicketSeat) => {
    const newState = cart.ticketSeat.filter(
      (seat: ITicketSeat) => seat.id !== newSeat.id
    );
    setCart((prevCart) => ({ ...prevCart, ticketSeat: newState }));
  };

  return (
    <OrderContext.Provider
      value={{
        removeTicketQueueCart,
        selectTicketQueue,
        selectionSeat,
        seats,
        cart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
