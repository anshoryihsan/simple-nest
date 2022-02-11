import { Controller, Post, Query } from '@nestjs/common';
import { TryhashService } from './tryhash.service';

@Controller('tryhash')
export class TryhashController {
  constructor(private readonly hashService: TryhashService) {}

  @Post()
  async hash(@Query('name') name: string): Promise<any> {
    const token = await this.hashService.createToken(name);
    console.log(`token: `, token);
    const { salt, hash } = await this.hashService.createHash(name);
    console.log(`salt: `, salt, '\n');
    console.log(`hash: `, hash, '\n');
    const validateName = await this.hashService.validateHash(name, hash, salt);
    console.log(`isMatch: `, validateName);
    const payload = {
      name,
      token: token,
      salt: salt,
      hash: hash,
      validateName: validateName,
    };
    return payload;
  }
}
