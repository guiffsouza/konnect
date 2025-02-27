import { ITicketsQueue } from "@/Shared/Interfaces/Queue";
import { ITicketSeat } from "../Shared/Interfaces/interface";

const generateSeats = (): ITicketSeat[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    position: (index + 1).toString(),
    selected: false,
    value: 200,
  }));
};

export const mockTicketsSeats = generateSeats();

const generateQueueTickets = (): ITicketsQueue[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    selected: false,
    value: 100,
  }));
};

export const mockTicketsQueue = generateQueueTickets();
