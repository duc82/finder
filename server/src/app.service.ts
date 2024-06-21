import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getIndex(): string {
    return "API Real Estate Finder - NestJS Backend";
  }
}
