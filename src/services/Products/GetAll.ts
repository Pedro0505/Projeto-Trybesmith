import * as Model from '../../models/ProductsModel';
import { IServiceReturnSuccess } from '../../interfaces/services';
import { IGetAllResponse } from '../../interfaces/routes/Products';

const GetAll = async () => {
  const result = await Model.GetAll();

  const serviceResponse: IServiceReturnSuccess<IGetAllResponse[]> = { code: 200, data: result };

  return serviceResponse;
};

export default GetAll;
