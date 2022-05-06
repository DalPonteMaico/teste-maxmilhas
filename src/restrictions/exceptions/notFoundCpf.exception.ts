import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundCpfException extends HttpException {
  constructor() {
    super('Cpf Não encontrado', HttpStatus.NOT_FOUND);
  }
}
