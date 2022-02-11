import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';
import { TryhashController } from './tryhash.controller';
import { TryhashService } from './tryhash.service';

@Module({
  imports: [JwtModule.register(jwtConfig)],
  controllers: [TryhashController],
  providers: [TryhashService],
})
export class TryhashModule {}
