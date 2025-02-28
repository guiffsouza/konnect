import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketQueue } from 'src/Schemas/ticket-queue';
import { TicketSeat } from 'src/Schemas/ticket-seat';

export class GeneratorTicketsService {
  constructor(
    @InjectModel(TicketSeat.name) private TicketSeatModel: Model<TicketSeat>,
    @InjectModel(TicketQueue.name) private TicketQueueModel: Model<TicketQueue>,
  ) {}

  private AMOUT_TICKETS_SEAT = 100;
  private AMOUNT_TICKETS_QUEUE = 200;

  public async generator() {
    const ticketsSeat = await this.TicketSeatModel.find();
    if (ticketsSeat.length === 0) {
      await this.TicketSeatModel.insertMany(this.ticketSeats());
    }

    const ticketsQueue = await this.TicketQueueModel.find();
    if (ticketsQueue.length === 0) {
      await this.TicketQueueModel.insertMany(this.ticketQueue());
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

  private ticketQueue() {
    return Array.from({ length: this.AMOUNT_TICKETS_QUEUE }, (_, index) => ({
      selected: false,
      sold: false,
      value: 100,
    }));
  }
}
