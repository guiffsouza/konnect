import { Controller, Get, Body, Put, Param } from '@nestjs/common';
import { TicketSeatService } from './ticket-seat.service';
import { TicketSeat } from 'src/Schemas/ticket-seat';

@Controller('ticket-seat')
export class TicketSeatController {
  constructor(private readonly ticketSeatService: TicketSeatService) {}

  @Get()
  async findAll() {
    return await this.ticketSeatService.findAll();
  }

  @Get('available')
  async findAvailable() {
    return await this.ticketSeatService.findAvailable();
  }

  @Get('sold')
  async findSold() {
    return await this.ticketSeatService.findSold();
  }

  @Get(':id')
  async findOne(@Param() id: { id: string }) {
    return await this.ticketSeatService.findOne(id);
  }

  @Put()
  update(@Body() ticketSeat: TicketSeat[]) {
    return this.ticketSeatService.update(ticketSeat);
  }
}
