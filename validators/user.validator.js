import Joi from 'joi';

const validateUserSchema = Joi.object({
    email: Joi.string().min(3).required(),
    password: Joi.string().required()
});

export default validateUserSchema;
