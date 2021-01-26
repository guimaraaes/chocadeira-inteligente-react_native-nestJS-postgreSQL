import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProcessService])
  ],
  controllers: [ProcessController],
  providers: [ProcessService]
})
export class ProcessModule {}
