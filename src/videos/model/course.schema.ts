import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Mentor } from '../../users/model/mentor.schema'
import * as mongoose from "mongoose";

const getDefaultEndDate = (months : number) : Date =>{
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + months);

  return endDate;
}
@Schema()
export class Course  extends Document {
  @Prop({ required: true })
  tile: string;
  @Prop({ default: Date.now })
  startdDate: Date;
  @Prop({ default: getDefaultEndDate(3)})
  endDate: Date;
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Mentor"})
  createdBy : Mentor
}

export const CourseSchema = SchemaFactory.createForClass(Course);