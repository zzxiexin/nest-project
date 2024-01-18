import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 创建用户
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  // 获取所有的用户
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // 根据用户名查询
  @Get(':name')
  findOne(@Param('name') name: string): Promise<User> {
    return this.usersService.findOne(name);
  }

  // 根据id删除某个账户
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
