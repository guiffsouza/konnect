import { Module } from '@nestjs/common';
import { TicketQueueService } from './ticket-queue.service';
import { TicketQueueController } from './ticket-queue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketQueue, TicketQueueSchema } from 'src/Schemas/ticket-queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketQueue.name, schema: TicketQueueSchema },
    ]),
  ],
  controllers: [TicketQueueController],
  providers: [TicketQueueService],
})
export class TicketQueueModule {}
