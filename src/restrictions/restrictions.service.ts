import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestrictionDto } from './dto/create-restriction.dto';
import { RestrictionDocument } from './schemas/restriction.schema';
import { Model } from 'mongoose';

@Injectable()
export class RestrictionsService {
  constructor(@InjectModel('Restriction') private restrictionModel: Model<RestrictionDocument>) {
  }

  create(createRestrictionDto: CreateRestrictionDto) {
    const created = new this.restrictionModel(createRestrictionDto);
    const { cpf, createdAt } = created.save();
    return { cpf, createdAt };
  }

}
