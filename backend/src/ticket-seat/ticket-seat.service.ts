import { Injectable } from '@nestjs/common';
import { TicketSeat } from 'src/Schema/ticket-seat';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TicketSeatService {
  constructor(
    @InjectModel(TicketSeat.name) private TicketModel: Model<TicketSeat>,
  ) {}

  create() {
    const data = {
      id: '2',
      selected: false,
      value: 200,
    };
    new this.TicketModel(data).save();
  }

  findAll() {
    return this.TicketModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketSeat`;
  }

  update(id: number) {
    return `This action updates a #${id} ticketSeat`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketSeat`;
  }
}
