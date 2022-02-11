import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TryhashService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(name: string): Promise<string> {
    const payload = {
      token: name,
    };
    const tkn = await this.jwtService.signAsync(payload);
    return tkn;
  }

  async createHash(name: string): Promise<any> {
    const salt = await bcrypt.genSalt();
    const hash = {
      salt: salt,
      hash: await bcrypt.hash(name, salt),
    };
    return hash;
  }

  async validateHash(name: string, hash: string, salt: string): Promise<any> {
    const isMatch = await bcrypt.hash(name, salt);
    return isMatch === hash;
  }
}
