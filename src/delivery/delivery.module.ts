import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { BullModule } from '@nestjs/bull';
import { DeliverConsumer } from './delivery.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'delivery',
    }),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliverConsumer],
})
export class DeliveryModule {}
