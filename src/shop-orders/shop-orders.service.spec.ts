import { Test, TestingModule } from '@nestjs/testing';
import { ShopOrdersService } from './shop-orders.service';

describe('ShopOrdersService', () => {
  let service: ShopOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopOrdersService],
    }).compile();

    service = module.get<ShopOrdersService>(ShopOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
