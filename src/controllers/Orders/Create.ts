import { Request, Response } from 'express';
import * as Service from '../../services/Orders';

const Create = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { id } = req.tokenData;

  await Service.Create(products, id as number);

  return res.status(201).json({ order: { userId: id, products } });
};

export default Create;
