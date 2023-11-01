import { Module } from '@nestjs/common';
import { PrismaModule } from './services/prismaService/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
