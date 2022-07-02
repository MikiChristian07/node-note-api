import express from 'express';
import NoteController from '../controllers/note.controller.js';
import authenticateToken from '../middlewares/auth.middleware.js';

const noteRouter = express.Router();

noteRouter.post('/', authenticateToken, NoteController.create);
noteRouter.get('/', authenticateToken, NoteController.findUserNotes);
noteRouter.get('/:id', authenticateToken, NoteController.findbyid);
noteRouter.delete('/:id', authenticateToken, NoteController.delete);
noteRouter.put('/:id', authenticateToken, NoteController.update);

export default noteRouter;
