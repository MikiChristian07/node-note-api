/* eslint-disable import/extensions */
import express from 'express';
import NoteController from '../controllers/note.controller.js';
import auth from '../middlewares/auth.middleware.js';

const noteRouter = express.Router();

noteRouter.post('/', auth.authenticateToken, NoteController.create);
noteRouter.get('/', auth.authenticateToken, NoteController.findUserNotes);
noteRouter.get('/:id', auth.authenticateToken, NoteController.findbyid);
noteRouter.delete('/:id', auth.authenticateToken, NoteController.delete);
noteRouter.put('/:id', auth.authenticateToken, NoteController.update);

export default noteRouter;
