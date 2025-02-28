import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSeat, TicketSeatSchema } from 'src/Schemas/ticket-seat';
import { GeneratorTicketsService } from './generator-tickets.service';
import { TicketQueue, TicketQueueSchema } from 'src/Schemas/ticket-queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketSeat.name, schema: TicketSeatSchema },
      { name: TicketQueue.name, schema: TicketQueueSchema },
    ]),
  ],
  providers: [GeneratorTicketsService],
  exports: [GeneratorTicketsService],
})
export class GeneratorTicketsModule {}
