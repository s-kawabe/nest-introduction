import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService] // 外部からprisma moduleをimportするだけでprisma serviceを使えるようにするため
})
export class PrismaModule {}
