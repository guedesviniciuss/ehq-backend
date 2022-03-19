import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ShopOrdersModule } from './shop-orders/shop-orders.module';
import { AdressesModule } from './adresses/adresses.module';
import { CreditCardsModule } from './credit-cards/credit-cards.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ShopOrdersModule,
    AdressesModule,
    CreditCardsModule,
    // TypeOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
