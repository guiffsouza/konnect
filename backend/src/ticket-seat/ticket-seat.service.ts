import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TicketSeat } from 'src/Schemas/ticket-seat';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TicketSeatService {
  constructor(
    @InjectModel(TicketSeat.name) private TicketModel: Model<TicketSeat>,
  ) {}

  async findAll() {
    try {
      const tickets = await this.TicketModel.find();
      if (tickets.length > 0) {
        return tickets;
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(ticketSeat: TicketSeat[]) {
    try {
      const availableTickets = await this.TicketModel.find({ sold: false });
      if (availableTickets.length === 0) {
        throw new HttpException(
          { message: 'Seats sould out' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const ticketsIds = ticketSeat.map((ticket: any) => ticket.id);
      const tickets = await this.TicketModel.find({ _id: { $in: ticketsIds } });

      const soldSeats = tickets.every((ticket) => ticket.sold === false);
      if (!soldSeats) {
        const errorMessages = tickets
          .filter((ticket: TicketSeat) => ticket.sold === true)
          .map(
            (ticket: TicketSeat) =>
              `O assento ${ticket.position} ja foi vendido.`,
          );

        throw new HttpException(
          { message: 'Seat unavailable', error: errorMessages },
          HttpStatus.BAD_REQUEST,
        );
      }

      const batch = ticketSeat.map((ticket: any) => ({
        updateOne: {
          filter: { _id: ticket.id },
          update: { $set: { ...ticket } },
        },
      }));

      return await this.TicketModel.bulkWrite(batch);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
