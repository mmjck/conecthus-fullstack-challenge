import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserResponseDto } from './dto/response/user-response.dto';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { PaginationQueryDto } from './dto/request/pagination-query.dto';
import { UserResponseListDto } from './dto/response/user-response-list.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseListDto> {
    const user = await this.userService.create(createUserDto);

    const response: UserResponseListDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      registration: user.registration,
    };

    return response;
  }

  @Get()
  async getAll(@Query() paginationQuery: PaginationQueryDto) {
    let page = null;

    if (paginationQuery.q) {
      page = await this.userService.search(paginationQuery);
    } else {
      page = await this.userService.getAll(paginationQuery);
    }

    const users = page.data.map((e) => {
      const r: UserResponseListDto = {
        id: e.id,
        email: e.email,
        name: e.name,
        registration: e.registration,
      };

      return r;
    });

    return { ...page, data: users };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.userService.findById(id);

    const response: UserResponseDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      registration: user.registration,
      password: user.password,
    };

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.userService.remove(id);
    return { message: 'User deleted successfully' };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(id, updateUserDto);

    const response: UserResponseDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      registration: user.registration,
      password: user.password,
    };

    return response;
  }
}
