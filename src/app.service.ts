/**
 * moduleの子要素, ビジネスロジックを記述する
 */
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
