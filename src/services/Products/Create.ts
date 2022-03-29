import { ICreateRequest, ICreateResponse } from '../../interfaces/routes/Products';
import { IServiceReturnSuccess } from '../../interfaces/services';
import * as Model from '../../models/ProductsModel';

const Create = async ({ amount, name }: ICreateRequest) => {
  const response = await Model.Create({ amount, name });

  const serviceResponse: IServiceReturnSuccess<ICreateResponse> = { code: 201, data: response };

  return serviceResponse;
};

export default Create;
