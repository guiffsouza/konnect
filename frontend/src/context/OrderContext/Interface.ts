import { ICart } from "@/Shared/Interfaces/ICart";
import { ITicketSeat } from "@/Shared/Interfaces/ITicketSeat";

export interface IOrderContext {
  removeTicketQueueCart: () => void;
  selectTicketQueue: () => void;
  selectionSeat: (value: ITicketSeat) => void;
  fetchApi: () => Promise<void>;
  seats: ITicketSeat[];
  cart: ICart;
}
