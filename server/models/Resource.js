import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String }, // Optional
  description: { type: String } // Optional
});

export default mongoose.model('Resource', resourceSchema);