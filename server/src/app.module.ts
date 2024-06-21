import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeORM configuration
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: "mysql",
        host: configService.getOrThrow("DATABASE_HOST"),
        port: configService.getOrThrow("DATABASE_PORT"),
        username: configService.getOrThrow("DATABASE_USER"),
        password: configService.getOrThrow("DATABASE_PASSWORD"),
        database: configService.getOrThrow("DATABASE_NAME"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        logging: false,
        autoLoadEntities: true,
      }),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
