import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RestrictionsService } from './restrictions.service';
import { CreateRestrictionDto } from './dto/create-restriction.dto';
import { cpf } from 'cpf-cnpj-validator';
import { NotFoundCpfException } from './exceptions/notFoundCpf.exception';
import { InvalidCpfException } from './exceptions/InvalidCpf.exception';

@Controller('restrictions')
export class RestrictionsController {
  constructor(private readonly restrictionsService: RestrictionsService) {}

  @Post()
  async create(@Body() createRestrictionDto: CreateRestrictionDto) {
    const { cpf, createdAt } = await this.restrictionsService.create(createRestrictionDto);
    return { cpf, createdAt };
  }

  @Get()
  async searchCpf(@Query('cpf') cpfNumber: string) {
    if (!cpf.isValid(cpfNumber))
      throw new InvalidCpfException()

    const [found] = await this.restrictionsService.search({cpf: cpfNumber});
    if (found)
      return { cpf: found.cpf, createdAt: found.createdAt };
    else
      throw new NotFoundCpfException()
  }
}
