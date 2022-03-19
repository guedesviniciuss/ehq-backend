import { Test, TestingModule } from '@nestjs/testing';
import { ShopOrdersController } from './shop-orders.controller';
import { ShopOrdersService } from './shop-orders.service';

describe('ShopOrdersController', () => {
  let controller: ShopOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopOrdersController],
      providers: [ShopOrdersService],
    }).compile();

    controller = module.get<ShopOrdersController>(ShopOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
