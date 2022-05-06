import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { ValidCpf } from '../validators/cpf.validator';
import { Transform } from 'class-transformer';

export class CreateRestrictionDto {
  @IsNotEmpty()
  @Validate(ValidCpf)
  @ApiProperty({required: true})
  cpf: string;
}
