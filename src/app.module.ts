import { Module } from '@nestjs/common';
// import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HttpErrorFilter } from './shared/http-error.filter';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { TryhashModule } from './tryhash/tryhash.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BooksModule,
    UsersModule,
    AuthModule,
    TryhashModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter
    // }
  ],
})
export class AppModule {}
