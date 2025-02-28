import { Module } from '@nestjs/common';
import { TicketSeatService } from './ticket-seat.service';
import { TicketSeatController } from './ticket-seat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSeat, TicketSeatSchema } from 'src/Schemas/ticket-seat';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketSeat.name, schema: TicketSeatSchema },
    ]),
  ],
  controllers: [TicketSeatController],
  providers: [TicketSeatService],
})
export class TicketSeatModule {}
