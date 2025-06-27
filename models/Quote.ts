import mongoose, { Schema, models, model } from 'mongoose';

const QuoteSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    service: String,
    message: String,
  },
  { timestamps: true }
);

const Quote = models.Quote || model('Quote', QuoteSchema);
export default Quote;
