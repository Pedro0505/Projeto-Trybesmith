import Joi from 'joi';
import { IUser } from '../interfaces/routes/Users';

const UsersSchema = Joi.object<IUser>({
  username: Joi.string().strict().required().min(3)
    .messages({
      'string.min': '422|Username must be longer than 2 characters',
      'string.base': '422|Username must be a string',
      'any.required': '400|Username is required',
    }),
  classe: Joi.string().strict().required().min(3)
    .messages({
      'string.min': '422|Classe must be longer than 2 characters',
      'string.base': '422|Classe must be a string',
      'any.required': '400|Classe is required',
    }),
  level: Joi.number().strict().required().greater(0)
    .messages({
      'number.greater': '422|Level must be greater than 0',
      'number.base': '422|Level must be a number',
      'any.required': '400|Level is required',
    }),
  password: Joi.string().strict().required().min(8)
    .messages({
      'string.min': '422|Password must be longer than 7 characters',
      'string.base': '422|Password must be a string',
      'any.required': '400|Password is required',
    }),
});

export default UsersSchema;
