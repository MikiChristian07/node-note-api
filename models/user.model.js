import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 3
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            requried: true
        }
    }]

}, { timestamps: true });

userSchema.methods.toJsON = function () {
    const userObject = this.toObject;

    delete userObject.password;
    // eslint-disable-next-line no-underscore-dangle
    delete userObject.__v;

    return userObject;
};

const User = mongoose.model('User', userSchema);

export default User;
