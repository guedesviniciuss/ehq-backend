import { Injectable } from '@nestjs/common';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';

@Injectable()
export class CreditCardsService {
  create(createCreditCardDto: CreateCreditCardDto) {
    return 'This action adds a new creditCard';
  }

  findAll() {
    return `This action returns all creditCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creditCard`;
  }

  update(id: number, updateCreditCardDto: UpdateCreditCardDto) {
    return `This action updates a #${id} creditCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditCard`;
  }
}
