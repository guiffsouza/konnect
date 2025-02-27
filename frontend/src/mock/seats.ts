import { ITicket } from "../Shared/Interfaces/interface";

export const generateSeats = (): ITicket[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    position: (index + 1).toString(),
    selected: false,
    value: 200,
  }));
};

export const seatsArray = generateSeats();
