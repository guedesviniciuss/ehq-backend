import { PartialType } from '@nestjs/mapped-types';
import { CreateShopOrderDto } from './create-shop-order.dto';

export class UpdateShopOrderDto extends PartialType(CreateShopOrderDto) {}
