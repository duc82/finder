import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User } from "./entities/users.entity";

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}

  async isExists(email: string): Promise<boolean> {
    return this.dataSource.getRepository(User).existsBy({ email });
  }
}
