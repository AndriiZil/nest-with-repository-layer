import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() { name, email }: { name: string; email: string }) {
    return this.userService.createUser(name, email);
  }

  @Get()
  async getUser(@Query('email') email: string) {
    return this.userService.getUserByEmail(email);
  }
}
