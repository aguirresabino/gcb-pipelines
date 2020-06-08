import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  list(): Promise<User[]> {
    return this.userService.list();
  }

  @Post()
  create(@Body('name') name: string): Promise<User> {
    return this.userService.create(name);
  }
}
