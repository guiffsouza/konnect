import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TicketQueue } from 'src/Schemas/ticket-queue';
import { Model } from 'mongoose';
import { BaseTicketService } from 'src/basic-ticket/basic-ticket.service';

@Injectable()
export class TicketQueueService extends BaseTicketService<TicketQueue> {
  constructor(@InjectModel(TicketQueue.name) ticketModel: Model<TicketQueue>) {
    super(ticketModel);
  }
}
