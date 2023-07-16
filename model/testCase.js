import mongoose from 'mongoose';

const { Schema } = mongoose;

const testCaseSchema = new Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
});

const TestCase = mongoose.model('TestCase', testCaseSchema);

export default TestCase;
