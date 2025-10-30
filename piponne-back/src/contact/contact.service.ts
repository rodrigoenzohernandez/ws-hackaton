import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactMessage, ContactMessageDocument } from './schemas/contact-message.schema';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(ContactMessage.name)
    private contactMessageModel: Model<ContactMessageDocument>,
  ) {}

  async create(createContactMessageDto: CreateContactMessageDto): Promise<ContactMessage> {
    const createdMessage = new this.contactMessageModel(createContactMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<ContactMessage[]> {
    return this.contactMessageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<ContactMessage> {
    return this.contactMessageModel.findById(id).exec();
  }

  async updateStatus(id: string, status: string): Promise<ContactMessage> {
    return this.contactMessageModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
  }
}
