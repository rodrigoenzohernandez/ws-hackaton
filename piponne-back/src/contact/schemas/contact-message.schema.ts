import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactMessageDocument = ContactMessage & Document;

@Schema({ timestamps: true })
export class ContactMessage {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: 'pending', enum: ['pending', 'contacted', 'resolved'] })
  status: string;
}

export const ContactMessageSchema = SchemaFactory.createForClass(ContactMessage);
