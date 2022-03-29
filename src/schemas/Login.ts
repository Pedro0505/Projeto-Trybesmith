import Joi from 'joi';
import { ILogin } from '../interfaces/routes/Login';

const LoginSchema = Joi.object<ILogin>({
  username: Joi.string().required().messages({
    'any.required': '400|Username is required',
  }),
  password: Joi.string().required().messages({
    'any.required': '400|Password is required',
  }),
});

export default LoginSchema;
