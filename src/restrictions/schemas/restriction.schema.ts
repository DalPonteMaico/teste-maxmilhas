import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestrictionDocument = Restriction & Document;

@Schema()
export class Restriction {
  @Prop()
  id: string;

  @Prop()
  cpf: string;

  @Prop({ default: new Date().toISOString() })
  createdAt: string;
}

export const RestrictionSchema = SchemaFactory.createForClass(Restriction);
