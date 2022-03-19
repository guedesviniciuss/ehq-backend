import { Module } from '@nestjs/common';
import { ShopOrdersService } from './shop-orders.service';
import { ShopOrdersController } from './shop-orders.controller';

@Module({
  controllers: [ShopOrdersController],
  providers: [ShopOrdersService]
})
export class ShopOrdersModule {}
