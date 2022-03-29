import { NextFunction, Request, Response } from 'express';
import { UsersSchema } from '../schemas';

const ProductValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = UsersSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    const codeNum = +code;
    return res.status(codeNum).json({ error: message });
  }

  next();
};

export default ProductValidate;
