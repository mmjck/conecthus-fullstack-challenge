import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { PaginationQueryDto } from './dto/request/pagination-query.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  async getAll(paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery;

    const [items, totalItems] = await this.repository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data: items,
      meta: {
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
        limit,
      },
    };
  }

  async search(paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1, q } = paginationQuery;
    const offset = (page - 1) * limit;

    const queryBuilder = this.repository.createQueryBuilder('user');

    queryBuilder.where('LOWER(user.name) LIKE LOWER(:query)', {
      query: `%${q}%`,
    });

    const [data, total] = await queryBuilder
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    console.log(data, total);

    return {
      data: data,
      meta: {
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        limit,
      },
    };
  }

  async findById(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not foud');
    }

    if (updateUserDto.email != user.email) {
      user.email = updateUserDto.email;
    }

    if (updateUserDto.name != user.name) {
      user.name = updateUserDto.name;
    }

    if (updateUserDto.password != user.password) {
      user.password = updateUserDto.password;
    }

    if (updateUserDto.registration != user.registration) {
      user.registration = updateUserDto.registration;
    }
    return this.repository.save(user);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
