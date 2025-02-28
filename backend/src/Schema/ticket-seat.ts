import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TicketSeat {
  @Prop()
  position: string;

  @Prop()
  selected: boolean;

  @Prop()
  sold: boolean;

  @Prop()
  value: number;
}

const TicketSeatSchema = SchemaFactory.createForClass(TicketSeat);
TicketSeatSchema.set('toJSON', {
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});
export { TicketSeatSchema };
