import { ITicketSeat } from "./ITicketSeat";
import { ITicketQueue } from "./ITicketQueue";

export interface ICart {
  ticketSeat: ITicketSeat[];
  ticketQueue: ITicketQueue[];
}
