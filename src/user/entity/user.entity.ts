import { Coupon } from 'src/coupon/entity/coupon.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Coupon, (coupon) => coupon.user)
  coupons: Coupon[];
}
