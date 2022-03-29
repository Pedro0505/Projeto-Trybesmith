import { Request, Response } from 'express';
import * as Service from '../../services/Products';

const GetAll = async (_req: Request, res: Response) => {
  const { code, data } = await Service.GetAll();

  return res.status(code).json(data);
};

export default GetAll;
