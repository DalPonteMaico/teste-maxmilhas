import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { ValidCpf } from '../validators/cpf.validator';

export class CreateRestrictionDto {
  @IsNotEmpty()
  @Validate(ValidCpf)
  @ApiProperty({required: true})
  cpf: string;
}
