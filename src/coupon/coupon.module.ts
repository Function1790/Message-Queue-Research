import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './entity/coupon.entity';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coupon]),
    BullModule.registerQueue({
      name: 'coupon',
    }),
  ],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
