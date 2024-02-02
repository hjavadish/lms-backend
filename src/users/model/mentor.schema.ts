import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";

@Schema()
export class Mentor  {
  @Prop({ required: true })
  fullname: string;
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: Date.now })
  createdDate: Date;
}
export type MentorDocument = Mentor & Document
export const MentorSchema = SchemaFactory.createForClass(Mentor);
