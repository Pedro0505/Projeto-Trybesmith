import * as Model from '../../models/ProductsModel';
import { ServiceReturnSuccess } from '../../interfaces/services';
import { GetAllResponse } from '../../interfaces/routes/Products';

const GetAll = async () => {
  const result = await Model.GetAll();

  const serviceResponse: ServiceReturnSuccess<GetAllResponse[]> = { code: 200, data: result };

  return serviceResponse;
};

export default GetAll;
