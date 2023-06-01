import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll() {
    const data = await this.prismaClient.user.findMany();

    return data;
  }
}
