import { Repository } from 'typeorm';
import { UserModal } from '../../../model';
import { UserDto } from '../../../DTOs';


export class UserService {
  constructor(private userRepository: Repository<UserModal>) { }

  async create(data: UserDto) {
    try {

      const currentDate = new Date();
      // currentDate.setHours(currentDate.getHours() - 3);

      const user = this.userRepository.create({
        ...data,
        createdAt: currentDate
      });

      const createUser = await this.userRepository.save(user);

      return createUser;

    } catch (error) {
      console.log(error, 'erro no service, create()');
      throw new Error('Internal Server Error');
    }
  }

  async getAll(page: number = 1, limit: number = 10): Promise<UserDto[]> {

    try {
      const skip = (page - 1) * limit;

      const users = await this.userRepository.find({
        skip,
        take: limit
      });

      return users;

    } catch (error) {
      console.log(error, 'erro no service, getAll()');
      throw new Error('Internal Server Error');
    }
  }

  async delete(id: string) {
    try {
      const userDelete = await this.userRepository.findOne({
        where: { id }
      });

      if (!userDelete) {
        throw new Error('User not found');
      }

      await this.userRepository.delete(id);

      return { message: 'User deleted' };

    } catch (error) {
      console.log(error, 'erro no service, delete()');
      throw new Error('Internal Server Error');
    }
  }

}