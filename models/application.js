import mongoose from 'mongoose';
const { Schema } = mongoose;

const detailSchema = new Schema({
  name: String,
  gender: String,
  birth: Date,
  age : Number ,
  doctor: String,
  date: String,
  time : String,
  reason : String
});
detailSchema.index({ doctor: 1, date: 1, time: 1 }, { unique: true });

export default mongoose.model('Appointment', detailSchema);
