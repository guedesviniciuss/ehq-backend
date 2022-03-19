import { Injectable } from '@nestjs/common';
import { CreateShopOrderDto } from './dto/create-shop-order.dto';
import { UpdateShopOrderDto } from './dto/update-shop-order.dto';

@Injectable()
export class ShopOrdersService {
  create(createShopOrderDto: CreateShopOrderDto) {
    return 'This action adds a new shopOrder';
  }

  findAll() {
    return `This action returns all shopOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopOrder`;
  }

  update(id: number, updateShopOrderDto: UpdateShopOrderDto) {
    return `This action updates a #${id} shopOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopOrder`;
  }
}
