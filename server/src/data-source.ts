import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

const AppDataSource = new DataSource({
  type: "mysql",
  host: configService.getOrThrow("DATABASE_HOST"),
  port: configService.getOrThrow("DATABASE_PORT"),
  username: configService.getOrThrow("DATABASE_USER"),
  password: configService.getOrThrow("DATABASE_PASSWORD"),
  database: configService.getOrThrow("DATABASE_NAME"),
  logging: false,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: ["./migrations/*.ts"], // Path to the migration files
  subscribers: [],
});

export default AppDataSource;
