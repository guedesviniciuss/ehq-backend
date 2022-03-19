import { EntityRepository, Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(User)
export class DogRepository extends Repository<User> {
  createUser = async (userDto: CreateUserDto) => {
    return await this.save(userDto);
  };

  updateUser = async (userDto: UpdateUserDto) => {
    return await this.save(userDto);
  };
}
