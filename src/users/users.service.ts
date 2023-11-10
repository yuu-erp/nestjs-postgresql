import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.prismaService.user.create({ data: createUserDto });
  }
}
