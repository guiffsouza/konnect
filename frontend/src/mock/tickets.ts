import { ITicketQueue } from "@/Shared/Interfaces/ITicketQueue";
import { ITicketSeat } from "../Shared/Interfaces/ITicketSeat";

const generateSeats = (): ITicketSeat[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    position: (index + 1).toString(),
    selected: false,
    sold: false,
    value: 200,
  }));
};

export const mockTicketsSeats = generateSeats();

const generateQueueTickets = (): ITicketQueue[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    selected: false,
    sold: false,
    value: 100,
  }));
};

export const mockTicketsQueue = generateQueueTickets();
