import { Controller, Get, Body, Put, Param } from '@nestjs/common';
import { TicketQueueService } from './ticket-queue.service';
import { TicketQueue } from 'src/Schemas/ticket-queue';

@Controller('ticket-queue')
export class TicketQueueController {
  constructor(private readonly ticketQueueService: TicketQueueService) {}

  @Get()
  async findAll() {
    return await this.ticketQueueService.findAll();
  }

  @Get('available')
  async findAvailable() {
    return await this.ticketQueueService.findAvailable();
  }

  @Get('sold')
  async findSold() {
    return await this.ticketQueueService.findSold();
  }

  @Get(':id')
  async findOne(@Param() id: { id: string }) {
    return await this.ticketQueueService.findOne(id);
  }

  @Put()
  update(@Body() ticketQueue: TicketQueue[]) {
    return this.ticketQueueService.update(ticketQueue);
  }
}
