import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TicketSeat {
  @Prop()
  id: string;

  @Prop()
  selected: boolean;

  @Prop()
  value: number;
}

export const TicketSeatSchema = SchemaFactory.createForClass(TicketSeat);
