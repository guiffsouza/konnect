import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketSeat } from 'src/Schema/ticket-seat';

export class GeneratorTicketsService {
  constructor(
    @InjectModel(TicketSeat.name) private TicketSeatModel: Model<TicketSeat>,
  ) {}

  private AMOUT_TICKETS_SEAT = 100;

  public async generator() {
    const ticketsSeat = await this.TicketSeatModel.find();
    if (ticketsSeat.length === 0) {
      await this.TicketSeatModel.insertMany(this.ticketSeats());
    }
  }

  private ticketSeats() {
    return Array.from({ length: this.AMOUT_TICKETS_SEAT }, (_, index) => ({
      position: (index + 1).toString(),
      selected: false,
      sold: false,
      value: 200,
    }));
  }
}
