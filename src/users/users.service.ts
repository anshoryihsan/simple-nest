import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepositoryOld: Repository<User>,
    @InjectRepository(UserRepository)
    private readonly userRepositoryNew: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepositoryOld.save(
      this.userRepositoryOld.create(createUserDto),
    );
  }

  findAll(): Promise<User[]> {
    return this.userRepositoryOld.find();
  }

  findOne(id: number) {
    return this.userRepositoryOld.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepositoryOld.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepositoryOld.delete(id);
  }

  ///

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    return await this.userRepositoryNew.createUser(createUserDto);
  }

  async validateUser(email: string, password: string): Promise<User> {
    return await this.userRepositoryNew.validateUser(email, password);
  }
}
