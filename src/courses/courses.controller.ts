import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('v1/courses')
export class CoursesController {
  constructor(private service: CoursesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.getOne(id);
  }

  @Post()
  create(@Body() course: any) {
    return this.service.create(course);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updates: any) {
    return this.service.update(id, updates);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { success: this.service.delete(id) };
  }
}
