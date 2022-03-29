import JwtGenerate from '../../helpers/JwtGenerate';
import { IToken, IUser } from '../../interfaces/routes/Users';
import { IServiceReturnSuccess } from '../../interfaces/services';
import * as Model from '../../models/UsersModel';

const Create = async ({ classe, level, password, username }: IUser) => {
  await Model.Create({ classe, level, password, username });

  const token = JwtGenerate({ username });

  const serviceResponse: IServiceReturnSuccess<IToken> = { code: 201, data: { token } };

  return serviceResponse;
};

export default Create;
