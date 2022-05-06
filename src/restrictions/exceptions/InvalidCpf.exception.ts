import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCpfException extends HttpException {
  constructor() {
    super('Cpf inválido', HttpStatus.BAD_REQUEST);
  }
}
