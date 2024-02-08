import UserRepository from "@application/repository/UserRepository";

import UserEntity from "@domain/entity/UserEntity";

export default class CreateUser {
  constructor(readonly userRepository: UserRepository) {}

  async execute(userData: InputCreateUser): Promise<OutputCreateUser> {
    const userExist = await this.userRepository.findByEmail(userData.email);

    if (userExist) throw new Error('User already exists');
    
    const user = UserEntity.create(userData.email, userData.password);
    
    await this.userRepository.create(user);

    return {
      userId: user.userId,
      email: user.email,
      createdAt: user.createdAt
    };
  }
}

type InputCreateUser = {
  email: string;
  password: string;
}

type OutputCreateUser = {
  userId: string;
  email: string;
  createdAt: Date;
}
