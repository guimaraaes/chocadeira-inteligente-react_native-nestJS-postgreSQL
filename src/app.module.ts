import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ProcessModule } from './process/process.module';
import { UserModule } from './user/user.module';
 


 @Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      AuthModule, 
      ProcessModule,
      UserModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
