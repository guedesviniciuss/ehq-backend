import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopOrdersService } from './shop-orders.service';
import { CreateShopOrderDto } from './dto/create-shop-order.dto';
import { UpdateShopOrderDto } from './dto/update-shop-order.dto';

@Controller('shop-orders')
export class ShopOrdersController {
  constructor(private readonly shopOrdersService: ShopOrdersService) {}

  @Post()
  create(@Body() createShopOrderDto: CreateShopOrderDto) {
    return this.shopOrdersService.create(createShopOrderDto);
  }

  @Get()
  findAll() {
    return this.shopOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopOrderDto: UpdateShopOrderDto) {
    return this.shopOrdersService.update(+id, updateShopOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopOrdersService.remove(+id);
  }
}
