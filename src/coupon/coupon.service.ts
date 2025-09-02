import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { Coupon } from './entity/coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CouponService extends BaseService<Coupon> {
  constructor(@InjectRepository(Coupon) repo: Repository<Coupon>) {
    super(repo);
  }
}
