import UUIDGenerator from "./UUIDGenerator";

export default class UserEntity {
  constructor(
    readonly userId: string,
    readonly name: string | null,
    readonly email: string,
    readonly password: string,
    readonly pictureUrl: string | null,
    readonly created_at: Date,
    readonly updated_at: Date | null
  ) {}

  static create(email: string, password: string): UserEntity {
    const userId = UUIDGenerator.generate();

    const created_at = new Date();

    return new UserEntity(
      userId,
      null,
      email,
      password,
      null,
      created_at,
      null
    );
  }
}
