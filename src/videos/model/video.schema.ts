import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Mentor } from '../../users/model/mentor.schema';
import { Course } from "./course.schema";

export type VideoDocument = Video & Document;

@Schema()
export class Video {
  title: string;
  video: string;
  coverImage: string;
  uploadDate: Date;
  createdBy: Mentor;
  course: Course;
}

export const VideoSchema = SchemaFactory.createForClass(Video);