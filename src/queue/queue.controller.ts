import { Body, Controller, Post } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post()
  addMessage(@Body() data: number) {
    return this.queueService.addMessageQueue(data);
  }
}
