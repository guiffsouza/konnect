import { ICart } from "@/Shared/Interfaces/ICart";
import { ITicketQueue } from "@/Shared/Interfaces/ITicketQueue";
import { ITicketSeat } from "@/Shared/Interfaces/ITicketSeat";

export interface IOrderContext {
  removeTicketQueueCart: () => void;
  selectTicketQueue: () => void;
  selectionSeat: (value: ITicketSeat) => void;
  ticketQueue: ITicketQueue[];
  fetchApi: () => Promise<void>;
  seats: ITicketSeat[];
  cart: ICart;
}
