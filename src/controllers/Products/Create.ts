import { Request, Response } from 'express';
import { ICreateRequest } from '../../interfaces/routes/Products';
import * as Service from '../../services/Products';

const Create = async (req: Request, res: Response) => {
  const { amount, name }: ICreateRequest = req.body;

  const { code, data } = await Service.Create({ amount, name });

  return res.status(code).json(data);
};

export default Create;
