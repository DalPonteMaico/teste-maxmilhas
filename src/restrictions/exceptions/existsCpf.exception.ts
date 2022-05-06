import { HttpException, HttpStatus } from '@nestjs/common';

export class ExistsCpfException extends HttpException {
  constructor() {
    super('Cpf Já existe', HttpStatus.BAD_REQUEST);
  }
}
