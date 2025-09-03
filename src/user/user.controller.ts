import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.find({});
  }

  @Post('register')
  register(@Body() dto: Partial<User>) {
    return this.userService.register(dto);
  }
}
