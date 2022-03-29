import { Request, Response } from 'express';
import * as Service from '../../services/Orders';

const GetAll = async (req: Request, res: Response) => {
  const { code, data } = await Service.GetAll();

  return res.status(code).json(data);
};

export default GetAll;
