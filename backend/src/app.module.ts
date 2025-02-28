import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSeatModule } from './ticket-seat/ticket-seat.module';
import { GeneratorTicketsModule } from './generator-tickets/generator-tickets..module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@0.0.0.0:27017/konnect_db?authSource=admin',
    ),
    TicketSeatModule,
    GeneratorTicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
