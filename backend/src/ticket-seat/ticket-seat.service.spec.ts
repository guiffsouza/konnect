import { Test, TestingModule } from '@nestjs/testing';
import { TicketSeatService } from './ticket-seat.service';

describe('TicketSeatService', () => {
  let service: TicketSeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketSeatService],
    }).compile();

    service = module.get<TicketSeatService>(TicketSeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
