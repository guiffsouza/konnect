import { ICart } from "@/Shared/Interfaces/ICart";
import { ITicketSeat } from "@/Shared/Interfaces/interface";
import { ITicketsQueue } from "@/Shared/Interfaces/Queue";

export interface IOrderContext {
  removeTicketQueueCart: () => void;
  selectTicketQueue: () => void;
  selectionSeat: (value: ITicketSeat) => void;
  seats: ITicketSeat[];
  cart: ICart;
}
