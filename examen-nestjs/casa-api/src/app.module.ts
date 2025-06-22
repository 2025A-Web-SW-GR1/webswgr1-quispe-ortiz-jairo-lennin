import { Module } from '@nestjs/common';
import { CasasModule } from './casas/casas.module';

@Module({
  imports: [CasasModule],
})
export class AppModule {}