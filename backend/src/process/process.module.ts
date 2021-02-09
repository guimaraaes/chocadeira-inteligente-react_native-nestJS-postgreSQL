import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProcessController } from './process.controller';
import { HistoryRepository, ProcessRepository } from './process.repository';
import { ProcessService } from './process.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProcessRepository, HistoryRepository]),
    AuthModule
  ],
  controllers: [ProcessController],
  providers: [ProcessService]
})
export class ProcessModule {}
