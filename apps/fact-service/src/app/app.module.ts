import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactServiceModule } from './fact-service.module';

@Module({
  imports: [FactServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
