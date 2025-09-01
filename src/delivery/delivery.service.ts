import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

export const Status = [
  '결제대기',
  '결제완료',
  '주문접수',
  '배달중',
  '배달완료',
];

export interface Delivery {
  id: number;
  status: string;
}

const deliveries: Delivery[] = [];

@Injectable()
export class DeliveryService {
  constructor(@InjectQueue('delivery') private queue: Queue) {}

  find(): Delivery[] {
    return deliveries;
  }

  findOne(id: number): Delivery | undefined {
    const exist = deliveries.filter((d) => d.id == id);
    return exist[0] ?? undefined;
  }

  save(dto: Delivery) {
    const index = deliveries.findIndex((d) => d.id === dto.id);
    if (index !== -1) {
      deliveries[index] = dto; // 기존 값 덮어쓰기
      return dto;
    }
    deliveries.push(dto); // 새로 추가
    return dto;
  }

  remove(id: number) {
    const index = deliveries.findIndex((d) => d.id === id);
    if (index === -1) {
      return false; // 못 찾음
    }
    deliveries.splice(index, 1);
    return true; // 성공적으로 삭제됨
  }

  saveQueue(dto: Delivery) {
    this.save(dto);
    if (dto.status == '결제대기') {
      this.queue.add('cancel', dto, { delay: 30000 });
      //this.queue.add('task', dto, { delay: 0 });
    }
    return dto;
  }
}
