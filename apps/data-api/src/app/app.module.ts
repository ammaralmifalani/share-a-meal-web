import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendFeatureMealModule } from '@avans-nx-workshop/backend/features';

@Module({
  imports: [BackendFeatureMealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
