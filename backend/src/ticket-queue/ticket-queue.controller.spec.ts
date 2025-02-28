import { Test, TestingModule } from '@nestjs/testing';
import { TicketQueueController } from './ticket-queue.controller';
import { TicketQueueService } from './ticket-queue.service';

describe('TicketQueueController', () => {
  let controller: TicketQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketQueueController],
      providers: [TicketQueueService],
    }).compile();

    controller = module.get<TicketQueueController>(TicketQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
