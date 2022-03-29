import { Request, Response } from 'express';
import { IUser } from '../../interfaces/routes/Users';
import * as Service from '../../services/Users';

const Create = async (req: Request, res: Response) => {
  const { classe, level, password, username }: IUser = req.body;

  const { code, data } = await Service.Create({ classe, level, password, username });

  return res.status(code).json(data);
};

export default Create;
