import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schema/track.shema';
import { Model, Promise, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schema/comment.schema';
import { CreateTrackDto } from './dto/createTrack.dto';
import { CreateCommentDto } from './dto/createСomment.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name)
    private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, image, audio): Promise<Track> {
    try {
      const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
      const imagePath = this.fileService.createFile(FileType.IMAGE, image);
      const track = await this.trackModel.create({
        ...dto,
        listens: 0,
        audio: audioPath,
        image: imagePath,
      });
      return track;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getlAll(
    count = 10,
    offset = 0,
    search = '',
    by = 'name',
  ): Promise<Track[]> {
    const tracks = await this.trackModel
      .find({
        [by]: { $regex: new RegExp(search, 'i') },
      })
      .skip(offset)
      .limit(count);
    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    try {
      const track = await this.trackModel.findByIdAndDelete(id);
      this.fileService.removeFile(track.audio);
      this.fileService.removeFile(track.image);
      return track._id;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    try {
      const track = await this.trackModel.findById(dto.trackId);
      const comment = await this.commentModel.create({ ...dto });
      track.comments.push(comment._id);
      await track.save();
      return comment;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    track.save();
  }
}
