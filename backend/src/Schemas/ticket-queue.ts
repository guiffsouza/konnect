import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TicketQueue {
  @Prop()
  selected: boolean;

  @Prop()
  sold: boolean;

  @Prop()
  value: number;
}

export const TicketQueueSchema = SchemaFactory.createForClass(TicketQueue).set(
  'toJSON',
  {
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    },
  },
);
