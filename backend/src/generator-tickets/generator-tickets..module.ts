import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSeat, TicketSeatSchema } from 'src/Schema/ticket-seat';
import { GeneratorTicketsService } from './generator-tickets.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketSeat.name, schema: TicketSeatSchema },
    ]),
  ],
  providers: [GeneratorTicketsService],
  exports: [GeneratorTicketsService],
})
export class GeneratorTicketsModule {}
