import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(signUpDto: SignUpDto) {
    const isExists = await this.usersService.isExists(signUpDto.email);

    if (isExists) {
      throw new BadRequestException("User already exists");
    }
  }
}
