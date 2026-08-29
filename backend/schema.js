import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },  
  isCompleted: { type: Boolean, default: false },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'TodoUser', 
    required: true 
  }
}, { timestamps: true });

export default mongoose.model('tasks', taskSchema);