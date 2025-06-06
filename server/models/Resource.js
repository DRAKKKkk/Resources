import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // Add more fields if needed
});

export default mongoose.model('Resource', resourceSchema);