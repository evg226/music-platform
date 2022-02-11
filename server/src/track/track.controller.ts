import { Controller, Delete, Post, Get, Param, Body } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/createTrack.dto';
import { ObjectId } from 'mongoose';

@Controller('tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll() {
    return this.trackService.gellAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }
}
