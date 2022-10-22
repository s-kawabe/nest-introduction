/**
 * Nest.jsでは各機能をmoduleという単位で管理する（ex: auth, prisma, todo）
 * moduleの中にはserviceとcontrollerを配置する
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  // exportsにService等を登録するとこのmoduleをimportする側は、exportsに設定されたServiceも利用可能になる
  // 自作のコードの他にも、ライブラリ(ex: nestjs/jwt)のコードを読み込む際にも使う
  exports: [],
})
export class AppModule {}
