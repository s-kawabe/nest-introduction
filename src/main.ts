/**
 * main.tsはアプリケーションが実行される際のエントリポイント
 */

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import type { Request } from 'express'
import { ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import * as csurf from 'csurf' // CSRF対策として CSRF tokenを扱うためimport

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // DTOに関わるmodule
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.enableCors({
    credentials: true, // jwt tokenをcookieベースで解釈するため必要
    origin: ['localhost:3000']
  })
  // jwt認証をcookie baseで行うため、clientからのcookieをいい感じにするライブラリを使う
  app.use(cookieParser())
  await app.listen(3005)
}
bootstrap()
