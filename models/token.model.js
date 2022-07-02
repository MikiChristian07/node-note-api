import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema({
    token: {
        minlength: 2,
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

export const Token = mongoose.model('Token', tokenSchema);

export default Token;
