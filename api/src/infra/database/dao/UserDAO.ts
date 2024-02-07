import DAO from "@domain/dao/DAO";
import UserEntity from "@domain/entity/UserEntity";

export default class UserDAO implements DAO<UserEntity> {
  create(data: UserEntity): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      resolve(
        new UserEntity(
          0,
          null,
          'email',
          'password',
          null,
          new Date(),
          new Date()
        )
      )
    });
  }

  findById(id: number): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      resolve(
        new UserEntity(
          0,
          null,
          'email',
          'password',
          null,
          new Date(),
          new Date()
        )
      )
    });
  }
}
