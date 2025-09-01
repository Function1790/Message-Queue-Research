import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { DeliveryService } from './delivery.service';

@Processor('delivery')
export class DeliverConsumer {
  constructor(private readonly deliveryService: DeliveryService) {}
  private readonly logger = new Logger(DeliverConsumer.name);

  @Process('cancel')
  getMessageQueue(job: Job) {
    this.logger.log(`Receive id: ${job.data.id}`);
    if (job.data.status == '결제대기') {
      this.deliveryService.remove(job.data.id);
      this.logger.log(`Remove id: ${job.data.id}`);
    }
  }
}
