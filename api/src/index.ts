import LoadEnv from "@infra/helpers/LoadEnv";
import KnexAdapter from "@infra/database/KnexAdapter";
import UserDAO from '@infra/database/dao/UserDAO';
import ExpressAdapter from "@infra/http/ExpressAdapter";
import UserRepositoryImpl from "@infra/database/repository/UserRepositoryImpl";
import Registry from "@infra/di/Registry";

import UUIDGenerator from "@domain/entity/UUIDGenerator";
import UserEntity from "@domain/entity/UserEntity";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();

const userDAO = new UserDAO(knexAdapter.instance);

const userRepository = new UserRepositoryImpl(userDAO);

const registry = Registry.getInstance();
registry.register('UserRepository', userRepository);

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3000);
