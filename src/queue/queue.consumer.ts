import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('testQueue')
export class QueueConsumer {
  private readonly logger = new Logger(QueueConsumer.name);

  @Process('task')
  getMessageQueue(job: Job) {
    this.logger.log(`${job.data.dataId} 번 작업을 수신했습니다`);
  }
}
