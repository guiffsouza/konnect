export interface ITicketSeat {
  id: string;
  position: string;
  selected?: boolean;
  sold?: boolean;
  value: number;
}
