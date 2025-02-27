import { ITicketSeat } from "./interface";
import { ITicketsQueue } from "./Queue";

export interface ICart {
  ticketSeat: ITicketSeat[];
  ticketQueue: ITicketsQueue[];
}
