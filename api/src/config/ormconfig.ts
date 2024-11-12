import { DataSource } from "typeorm";
import { User } from "../entities/users";
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test.sqlite",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
