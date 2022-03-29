import JwtGenerate from '../../helpers/JwtGenerate';
import { ILogin } from '../../interfaces/routes/Login';
import { IToken } from '../../interfaces/routes/Users';
import { IServiceReturnError, IServiceReturnSuccess } from '../../interfaces/services';
import * as Model from '../../models/UsersModel'; 

const Login = async ({ username, password }: ILogin) => {
  const user = await Model.GetByUserName(username);

  const errorData: IServiceReturnError = { 
    code: 401, data: { error: 'Username or password invalid' },
  };

  if (!user) return errorData;
  if (user.password !== password) return errorData;

  const token = JwtGenerate({ username });

  const serviceResponse: IServiceReturnSuccess<IToken> = {
    code: 200,
    data: { token },
  };

  return serviceResponse;
};

const lint = 'não deveria existir essa regra :)';

export { Login, lint };
