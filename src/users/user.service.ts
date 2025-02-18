import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(name: string, email: string) {
    return this.userRepository.createUser(name, email);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findUserByEmail(email);
  }
}
