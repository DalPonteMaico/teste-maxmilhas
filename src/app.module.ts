import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestrictionsModule } from './restrictions/restrictions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RestrictionsModule,
    MongooseModule.forRoot('mongodb://root:password@localhost/restrictions'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
