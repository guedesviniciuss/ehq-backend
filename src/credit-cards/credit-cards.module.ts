import { Module } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreditCardsController } from './credit-cards.controller';

@Module({
  controllers: [CreditCardsController],
  providers: [CreditCardsService]
})
export class CreditCardsModule {}
