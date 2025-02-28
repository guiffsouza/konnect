import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TicketSeatService } from './ticket-seat.service';
import { TicketSeat } from 'src/Schema/ticket-seat';

@Controller('ticket-seat')
export class TicketSeatController {
  constructor(private readonly ticketSeatService: TicketSeatService) {}

  @Get()
  findAll() {
    return this.ticketSeatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketSeatService.findOne(id);
  }

  @Put()
  update(@Body() ticketSeat: TicketSeat[]) {
    return this.ticketSeatService.update(ticketSeat);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketSeatService.remove(id);
  }
}
