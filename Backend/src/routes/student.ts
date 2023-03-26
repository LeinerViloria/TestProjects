import {Router} from 'express';
import Controller from '../controllers/student';
import { ValidBody } from '../middlewares/Entities/Student.middleware';
import auth from '../middlewares/Logic/auth';
import { validId } from '../middlewares/Logic/validId';

const router = Router();

router.get('/list/:name?', auth, Controller.GetStudents);
router.get('/detail/:_id', auth, validId, Controller.GetStudent);
router.post('/create', auth, ValidBody, Controller.Insert);
router.put('/:_id', auth, validId, Controller.Edit);
router.delete('/:_id', auth, validId, Controller.DeleteStudent);

export {router}