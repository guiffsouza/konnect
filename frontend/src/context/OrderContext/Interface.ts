import { ITicket } from "@/Shared/Interfaces/interface";
import { IQueue } from "@/Shared/Interfaces/Queue";

export interface IOrderContext {
  selectionSeat: (value: ITicket) => void;
  ticktQueue: IQueue[];
  seats: ITicket[];
  cart: ITicket[];
}
