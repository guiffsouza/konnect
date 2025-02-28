"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IOrderContext } from "./Interface";
import { mockTicketsQueue } from "@/mock/seats";
import { ITicketSeat } from "@/Shared/Interfaces/ITicketSeat";
import { ITicketQueue } from "@/Shared/Interfaces/ITicketQueue";
import { ICart } from "@/Shared/Interfaces/ICart";
import { api } from "@/api/api";

export const OrderContext = createContext<IOrderContext | undefined>(undefined);
export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [seats, setSeat] = useState<ITicketSeat[]>([]);

  const [ticketQueue, setTicketQuery] =
    useState<ITicketQueue[]>(mockTicketsQueue);

  const [cart, setCart] = useState<ICart>({
    ticketQueue: [],
    ticketSeat: [],
  });

  const fetchApi = async () => {
    try {
      const res = await api.get("/ticket-seat");
      setSeat(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const selectionSeat = (newSeat: ITicketSeat) => {
    if (!newSeat.sold) {
      setSeat((prevSeat) => {
        return prevSeat.map((seat) =>
          seat.id === newSeat.id
            ? { ...seat, selected: !newSeat.selected }
            : seat
        );
      });

      if (!newSeat.selected) {
        const found = seats.find((seat) => seat.id === newSeat.id);
        addToCart("ticketSeat", {
          ...found,
          selected: true,
          sold: true,
        } as ITicketSeat);
      }

      if (newSeat.selected) {
        removeToCart(newSeat);
      }
    }
  };

  const selectTicketQueue = () => {
    if (ticketQueue.length > 0) {
      const newTicket = ticketQueue.shift();
      addToCart("ticketQueue", newTicket as ITicketQueue);
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
        fetchApi,
        seats,
        cart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
