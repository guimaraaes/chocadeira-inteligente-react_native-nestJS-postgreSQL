import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserService]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
