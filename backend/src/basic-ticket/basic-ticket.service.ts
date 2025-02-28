import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class BaseTicketService<T> {
  constructor(private readonly model: Model<T>) {}

  async findAll() {
    try {
      const tickets = await this.model.find();
      return tickets.length > 0 ? tickets : [];
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne({ id }: { id: string }) {
    try {
      return await this.model.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findSold() {
    try {
      const tickets = await this.model.find({ sold: true });
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
      const tickets = await this.model.find({ sold: false });
      if (tickets.length === 0) {
        throw new HttpException(
          { message: 'Tickets sold out' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return tickets;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(ticketsData: T[]) {
    try {
      await this.findAvailable();

      const ticketsIds = ticketsData.map((ticket: any) => ticket.id);
      const tickets = await this.model.find({ _id: { $in: ticketsIds } });

      const allAvailable = tickets.every(
        (ticket: any) => ticket.sold === false,
      );

      if (!allAvailable) {
        const errorMessages = tickets
          .filter((ticket: any) => ticket.sold === true)
          .map((ticket: any) => `Ticket ${ticket._id} is already sold.`);

        throw new HttpException(
          { message: 'Tickets unavailable', error: errorMessages },
          HttpStatus.BAD_REQUEST,
        );
      }

      const batch = ticketsData.map((ticket: any) => ({
        updateOne: {
          filter: { _id: ticket.id },
          update: { $set: { ...ticket } },
        },
      }));

      return await this.model.bulkWrite(batch);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
