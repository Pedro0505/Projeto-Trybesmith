import { NextFunction, Request, Response } from 'express';
import { IOrderCreateRequest } from '../interfaces/routes/Orders';

const OrderValidate = (req: Request, res: Response, next: NextFunction) => {
  const { products }: IOrderCreateRequest = req.body;

  if (!products) return res.status(400).json({ error: 'Products is required' });
  if (!products.length) return res.status(422).json({ error: 'Products can\'t be empty' });

  if (!Array.isArray(products)) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }
  
  const verifyArray = products.every((e) => typeof e === 'number');

  if (!verifyArray) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }

  next();
};

export default OrderValidate;
