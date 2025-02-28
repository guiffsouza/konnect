import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketQueue } from 'src/Schemas/ticket-queue';

@Injectable()
export class TicketQueueService {
  constructor(
    @InjectModel(TicketQueue.name) private TicketModel: Model<TicketQueue>,
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

  async findOne({ id }: { id: string }) {
    try {
      return await this.TicketModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findSold() {
    try {
      const tickets = await this.TicketModel.find({ sold: true });
      return {
        amount: tickets.length,
        sold: tickets,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAvailable() {
    try {
      const tickets = await this.TicketModel.find({ sold: false });
      if (tickets.length < 0) {
        throw new HttpException(
          { message: 'Queue sould out' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return tickets;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(ticketQueue: TicketQueue[]) {
    try {
      await this.findAvailable();

      const ticketsIds = ticketQueue.map((ticket: any) => ticket.id);
      const tickets = await this.TicketModel.find({ _id: { $in: ticketsIds } });

      const soldSeats = tickets.every((ticket) => ticket.sold === false);
      if (!soldSeats) {
        const errorMessages = tickets.filter(
          (ticket: TicketQueue) => ticket.sold === true,
        );

        throw new HttpException(
          { message: 'Ticket unavailable', error: errorMessages },
          HttpStatus.BAD_REQUEST,
        );
      }

      const batch = ticketQueue.map((ticket: any) => ({
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
