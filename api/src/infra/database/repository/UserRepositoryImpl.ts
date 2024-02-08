import UserRepository from "@application/repository/UserRepository";
import UserEntity from "@domain/entity/UserEntity";

export default class UserRepositoryImpl implements UserRepository {
  create(user: UserEntity): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  update(user: UserEntity): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
}
