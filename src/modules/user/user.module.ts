import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [UserService, PrismaClient],
  controllers: [UserController],
})
export class UserModule {}
