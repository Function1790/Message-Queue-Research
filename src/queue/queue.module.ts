import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bull';
import { QueueConsumer } from './queue.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'testQueue',
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, QueueConsumer],
})
export class QueueModule {}
