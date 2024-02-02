import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Learning Management System API. Please read the documents!';
  }
}
