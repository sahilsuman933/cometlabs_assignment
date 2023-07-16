import express from 'express';
import {
  addQuestion,
  editQuestion,
  deleteQuestion,
  getQuestions,
  addTestCaseToQuestion,
} from '../controller/questionController';
import checkRole from '../middlewares/checkRole';

const router = express.Router();

router.get('/', getQuestions);

router.post('/', checkRole('admin'), addQuestion);
router.put('/:id', checkRole('admin'), editQuestion);
router.delete('/:id', checkRole('admin'), deleteQuestion);
router.post('/:id/testcases', checkRole('admin'), addTestCaseToQuestion);

export default router;
