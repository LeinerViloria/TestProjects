import {Router} from 'express';
import Controller from '../controllers/student';
import { ValidBody } from '../middlewares/Entities/Student.middleware';

const router = Router();

router.get('/list/:name?', Controller.GetStudents);
router.get('/detail/:_id', Controller.GetStudent);
router.post('/create', ValidBody, Controller.Insert);
router.put('/:_id', Controller.Edit);
router.delete('/:_id', Controller.DeleteStudent);

export {router}