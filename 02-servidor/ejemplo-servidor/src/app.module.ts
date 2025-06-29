import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaludoController } from './saludo/saludo.controller';

@Module({
  imports: [],
  controllers: [AppController, SaludoController],
  providers: [AppService],
})
export class AppModule {}
