import { Controller, Get, Body, Put } from '@nestjs/common';
import { TicketSeatService } from './ticket-seat.service';
import { TicketSeat } from 'src/Schemas/ticket-seat';

@Controller('ticket-seat')
export class TicketSeatController {
  constructor(private readonly ticketSeatService: TicketSeatService) {}

  @Get()
  async findAll() {
    return await this.ticketSeatService.findAll();
  }

  @Put()
  update(@Body() ticketSeat: TicketSeat[]) {
    return this.ticketSeatService.update(ticketSeat);
  }
}
