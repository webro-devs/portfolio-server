import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
  Delete,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  // @ApiOperation({ summary: 'Method: returns all users' })
  // @ApiOkResponse({
  //   description: 'The users were returned successfully',
  // })
  @HttpCode(HttpStatus.OK)
  async getData() {
    try {
      return await this.userService.getAll();
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
