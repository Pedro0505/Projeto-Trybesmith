import Joi from 'joi';
import { ICreateRequest } from '../interfaces/routes/Products';

const ProductSchema = Joi.object<ICreateRequest>({
  name: Joi.string().strict().required().min(2)
    .messages({
      'string.min': '422|Name must be longer than 2 characters',
      'string.base': '422|Name must be a string',
      'any.required': '400|Name is required',
    }),
  amount: Joi.string().strict().required().min(2)
    .messages({
      'string.min': '422|Amount must be longer than 2 characters',
      'string.base': '422|Amount must be a string',
      'any.required': '400|Amount is required',
    }),
});

export default ProductSchema;
