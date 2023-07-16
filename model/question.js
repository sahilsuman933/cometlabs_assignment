import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  testCases: [{ type: Schema.Types.ObjectId, ref: 'TestCase' }],
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
