import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestrictionsService } from './restrictions.service';
import { CreateRestrictionDto } from './dto/create-restriction.dto';
import { UpdateRestrictionDto } from './dto/update-restriction.dto';

@Controller('restrictions')
export class RestrictionsController {
  constructor(private readonly restrictionsService: RestrictionsService) {}

  @Post()
  create(@Body() createRestrictionDto: CreateRestrictionDto) {
    return this.restrictionsService.create(createRestrictionDto);
  }

}
