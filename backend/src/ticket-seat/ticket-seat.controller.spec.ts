import { Test, TestingModule } from '@nestjs/testing';
import { TicketSeatController } from './ticket-seat.controller';
import { TicketSeatService } from './ticket-seat.service';

describe('TicketSeatController', () => {
  let controller: TicketSeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketSeatController],
      providers: [TicketSeatService],
    }).compile();

    controller = module.get<TicketSeatController>(TicketSeatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
