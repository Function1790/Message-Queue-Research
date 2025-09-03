import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('user')
export class UserConsumer {
  private readonly logger = new Logger(UserConsumer.name);

  @Process('register')
  getMessageQueue(job: Job) {
    this.logger.log(`${job.data.uid}의 작업을 수신했습니다`);
    this.logger.log(`${job.data.uid}에게 쿠폰 전송`);
  }
}
