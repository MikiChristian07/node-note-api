import express from 'express';
import NoteController from '../controllers/note.controller.js';
import { Note } from '../models/note.model.js';

const noteRouter = express.Router();

noteRouter.post('/', NoteController.create);
noteRouter.get('/', NoteController.find);
noteRouter.get('/:id', NoteController.findbyid);
noteRouter.delete('/:id', NoteController.delete);
noteRouter.put('/:id', NoteController.update);

export default noteRouter;
