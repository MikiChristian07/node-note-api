/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { Note } from '../models/note.model.js';

class NoteService {
    async create(data) {
        // const newnote = await Note.create(data);
        // try {
        const newnote = await Note.create(data);
        return newnote;

        // } catch (error) {
        //     return error.message;
        // }
    }

    async fetch() {
        const notes = await Note.find({});
        return notes;
    }

    async findUserNotes(filter = {}) {
        const notes = await Note.find(filter).populate('user');
        return notes;
    }

    async fetchbyid(id) {
        const note = await Note.findById(id);
        return note;
    }

    async update(id, data) {
        const note = await Note.findOneAndUpdate({ _id: id }, data);
        return note;
    }

    async delete(id) {
        const note = await Note.findByIdAndDelete(id);
        return note;
    }
}

export default new NoteService();
