import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prismaService/prisma.service';

@Injectable()
export class UsersService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prismaService: PrismaService) { }
  findAll() {
    return 'Xin chào mình tên là Lê Khải Hoàn';
  }
}
