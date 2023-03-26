import {Router} from 'express';
import Controller from '../controllers/student';
import { ValidBody } from '../middlewares/Entities/Student.middleware';
import { validId } from '../middlewares/Logic/validId';

const router = Router();

router.get('/list/:name?', Controller.GetStudents);
router.get('/detail/:_id', validId, Controller.GetStudent);
router.post('/create', ValidBody, Controller.Insert);
router.put('/:_id', validId, Controller.Edit);
router.delete('/:_id', validId, Controller.DeleteStudent);

export {router}