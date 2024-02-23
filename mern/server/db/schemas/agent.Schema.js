// agent.model.js
import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  region: String,
  rating: Number,
  fee: Number,
  sales: Number
});

const Agent = mongoose.model('Agent', agentSchema, 'agents');  // The third argument is the collection name

export default Agent;