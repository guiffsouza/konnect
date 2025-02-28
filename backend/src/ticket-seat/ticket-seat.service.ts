import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TicketSeat } from 'src/Schemas/ticket-seat';
import { Model } from 'mongoose';
import { BaseTicketService } from 'src/basic-ticket/basic-ticket.service';

@Injectable()
export class TicketSeatService extends BaseTicketService<TicketSeat> {
  constructor(@InjectModel(TicketSeat.name) ticketModel: Model<TicketSeat>) {
    super(ticketModel);
  }
}
