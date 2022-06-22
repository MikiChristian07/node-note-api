/* eslint-disable class-methods-use-this */
import NoteService from '../services/note.service.js';

class NoteController {
    async create(req, res) {
        // return res.send('I have reache the note create()')
        // throw new Error('Testing throwing errors');
        const data = { title: req.body.title, content: req.body.content };
        const newNote = await NoteService.create(data);
        return res.status(201).send({ status: true, body: newNote });
    }

    async find(req, res) {
        const data = await NoteService.fetch();
        return res.status(201).send({
            status: true,
            body: data
        });
    }

    async findbyid(req, res) {
        const data = await NoteService.fetchbyid(req.params.id);
        return res.status(200).send({ status: true, body: data });
    }

    async delete(req, res) {
        const data = await NoteService.delete(req.params.id);
        return res.status(200).send({ status: true, body: data });
    }

    async update(req, res) {
        const data = await NoteService.update(req.params.id, req.body);
        return res.status(200).send({ status: true, body: data });
    }
}

export default new NoteController();
