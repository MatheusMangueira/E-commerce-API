import { Repository } from 'typeorm';
import { UserModal } from '../../../model';
import { UserDto } from '../../../DTOs';


export class UserService {
  constructor(private userRepository: Repository<UserModal>) { }

  async create(data: UserDto) {
    try {

      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 3);

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

}