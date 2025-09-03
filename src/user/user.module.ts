import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { BullModule } from '@nestjs/bull';
import { UserConsumer } from './consumer/user.consumer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    BullModule.registerQueue({
      name: 'user',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserConsumer],
})
export class UserModule {}
