import Question from '../model/question';
import TestCase from '../model/testCase';

export const addQuestion = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newQuestion = new Question({ title, description });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editQuestion = async (req, res) => {
  const { id } = req.params;

  const { title, description } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );
    res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    await Question.findByIdAndDelete(id);
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getQuestionById = async (questionId) => {
  const question = await Question.findById(questionId).populate('testCases');

  if (!question) {
    throw new Error('Question not found');
  }

  return question;
};

export const addTestCaseToQuestion = async (req, res) => {
  const { id } = req.params;
  const { input, output } = req.body;

  try {
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const newTestCase = new TestCase({ input, output });
    await newTestCase.save();

    question.testCases.push(newTestCase);
    await question.save();

    return res.status(201).json(newTestCase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
