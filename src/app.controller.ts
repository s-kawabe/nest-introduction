/**
 * moduleの子要素、ルーティングに関わる処理を記述する
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controllerの引数はパスを指定できる、デフォルトはルートディレクトリになる
// "root"を指定するとlocalhost:3000/root
@Controller()
export class AppController {
  // ⭐ ServiceをControllerにdependency injectionする
  // AppController内でAppServiceのメソッドを使いたい、この時にAppServiceをインスタンス化せずに、
  // 既にインスタンス化されたものをconstructor経由でControllerに注入
  // AppControllerがインスタンス化されたらAppServiceもインスタンス化される → IoC Container が担う
  constructor(private readonly appService: AppService) {}

  // こちらでもパス指定ができる。@Controllerにも指定していた場合はその一個下の階層からの話になる
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
