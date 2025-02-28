import { Test, TestingModule } from '@nestjs/testing';
import { TicketQueueService } from './ticket-queue.service';

describe('TicketQueueService', () => {
  let service: TicketQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketQueueService],
    }).compile();

    service = module.get<TicketQueueService>(TicketQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
