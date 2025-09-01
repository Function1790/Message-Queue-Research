import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Delivery, DeliveryService } from './delivery.service';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  getAll() {
    return this.deliveryService.find();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.deliveryService.findOne(id);
  }

  @Post()
  save(@Body() dto: Delivery) {
    return this.deliveryService.saveQueue(dto);
  }
}
