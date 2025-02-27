import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketSeatService } from './ticket-seat.service';

@Controller('ticket-seat')
export class TicketSeatController {
  constructor(private readonly ticketSeatService: TicketSeatService) {}

  @Post()
  create() {
    return this.ticketSeatService.create();
  }

  @Get()
  findAll() {
    return this.ticketSeatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketSeatService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTicketSeatDto: UpdateTicketSeatDto,
  // ) {
  //   return this.ticketSeatService.update(+id, updateTicketSeatDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketSeatService.remove(+id);
  }
}
