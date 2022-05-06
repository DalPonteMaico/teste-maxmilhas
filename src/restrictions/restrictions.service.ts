import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestrictionDto } from './dto/create-restriction.dto';
import { RestrictionDocument } from './schemas/restriction.schema';
import { Model } from 'mongoose';

@Injectable()
export class RestrictionsService {
  constructor(@InjectModel('Restriction') private restrictionModel: Model<RestrictionDocument>) {
  }

  list() {
    const query = this.restrictionModel.find({}).select({
        'cpf': 1,
        createdAt: 1,
        '_id': 0,
      },
    );
    return query.exec()
  }

  async create(createRestrictionDto: CreateRestrictionDto) {
    const created = new this.restrictionModel(createRestrictionDto);
    return created.save();
  }

  async search({ cpf }) {
    return this.restrictionModel.find({ 'cpf': cpf });
  }

  async delete({ cpf }) {
    return this.restrictionModel.deleteMany({ 'cpf': cpf });
  }

}
