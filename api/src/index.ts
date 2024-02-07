import LoadEnv from "@infra/helpers/LoadEnv";
import KnexAdapter from "@infra/database/KnexAdapter";
import UserDAO from '@infra/database/dao/UserDAO';

import UUIDGenerator from "@domain/entity/UUIDGenerator";
import UserEntity from "@domain/entity/UserEntity";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();

const userDAO = new UserDAO(knexAdapter.instance);
userDAO.create({
  userId: UUIDGenerator.generate(),
  name: null,
  email: 'teste@teste.com',
  password: '123',
  pictureUrl: null,
  createdAt: new Date(),
  updatedAt: null
});