import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    @InjectQueue('user') private userQueue: Queue,
  ) {
    super(repo);
  }

  async register(dto: Partial<User>) {
    const user = await this.repo.save(dto);
    await this.userQueue.add('register', dto, {});
    return user;
  }
}
