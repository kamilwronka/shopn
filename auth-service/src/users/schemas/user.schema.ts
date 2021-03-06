import validator from 'validator';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuthHistory } from './auth-history.schema';
import { ActivationData } from './activation-data.schema';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  activationData: ActivationData;

  @Prop({ required: true, validate: validator.isEmail, unique: true })
  email: string;

  @Prop({ required: false })
  language: string;

  @Prop({ required: false })
  authHistory: AuthHistory[];
}

export const UserSchema = SchemaFactory.createForClass(User);
