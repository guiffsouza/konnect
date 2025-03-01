import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSeatModule } from './ticket-seat/ticket-seat.module';
import { GeneratorTicketsModule } from './generator-tickets/generator-tickets..module';
import { TicketQueueModule } from './ticket-queue/ticket-queue.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL as string),
    GeneratorTicketsModule,
    TicketQueueModule,
    TicketSeatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
