import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {
        minlength: 2,
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Note = mongoose.model('Note', noteSchema);

export default {
    Note
};
