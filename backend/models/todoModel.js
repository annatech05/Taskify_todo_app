import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, default: "Medium" },
  dueDate: { type: Date, default: null },
});

export default mongoose.model("Todo", todoSchema);
