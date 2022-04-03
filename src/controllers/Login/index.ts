import { Request, Response } from 'express';
import * as Service from '../../services/Login';

const Login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const { code, data } = await Service.Login({ username, password });

  return res.status(code).json(data);
};

const lint = 'chato';

export { Login, lint };
