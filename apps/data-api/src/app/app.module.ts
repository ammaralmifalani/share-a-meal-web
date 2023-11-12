import { Module } from '@nestjs/common';
import { BackendFeatureMealModule } from '@avans-nx-workshop/backend/features';
import { UserModule } from '@avans-nx-workshop/share-a-meal/user';

@Module({
  imports: [BackendFeatureMealModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
