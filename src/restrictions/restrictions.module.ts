import { Module } from '@nestjs/common';
import { RestrictionsService } from './restrictions.service';
import { RestrictionsController } from './restrictions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RestrictionSchema } from './schemas/restriction.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Restriction', schema: RestrictionSchema}
  ])],
  controllers: [RestrictionsController],
  providers: [RestrictionsService]
})
export class RestrictionsModule {}
