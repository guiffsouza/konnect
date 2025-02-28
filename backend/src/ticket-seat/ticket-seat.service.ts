import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TicketSeat } from 'src/Schema/ticket-seat';
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

  findOne(id: string) {
    return `This action returns a #${id} ticketSeat`;
  }

  async update(ticketSeat: TicketSeat[]) {
    try {
      const ticketsIds = ticketSeat.map((ticket: any) => ticket.id);
      const tickets = await this.TicketModel.find({ _id: { $in: ticketsIds } });
      const isValid = tickets.every((item) => item.sold === false);

      if (!isValid) {
        const soldSeats = tickets
          .filter((ticket: TicketSeat) => ticket.sold === true)
          .map(
            (ticket: TicketSeat) =>
              `O assento ${ticket.position} ja foi vendido.`,
          );

        throw new HttpException(
          { message: 'Seat unavailable', error: soldSeats },
          HttpStatus.BAD_REQUEST,
        );
      }

      const batch = ticketSeat.map((item: any) => ({
        updateOne: {
          filter: { _id: item.id },
          update: {
            $set: {
              position: item.position,
              selected: item.selected,
              sold: item.sold,
              value: item.value,
            },
          },
        },
      }));

      return await this.TicketModel.bulkWrite(batch);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} ticketSeat`;
  }
}
