import { Module } from '@nestjs/common';
import { BackendFeatureMealModule } from '@avans-nx-workshop/backend/features';

@Module({
  imports: [BackendFeatureMealModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
