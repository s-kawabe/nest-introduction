/**
 * Nest.jsでは各機能をmoduleという単位で管理する（ex: auth, prisma, todo）
 * moduleの中にはserviceとcontrollerを配置する
 */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TodoModule } from './todo/todo.module'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  // 環境変数に関わるconfig serviceはどこでも使えるようにglobal importしておく
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UserModule, TodoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  // exportsにService等を登録するとこのmoduleをimportする側は、exportsに設定されたServiceも利用可能になる
  // 自作のコードの他にも、ライブラリ(ex: nestjs/jwt)のコードを読み込む際にも使う
  exports: []
})
export class AppModule {}
