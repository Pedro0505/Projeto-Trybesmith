import { IOrder } from '../../interfaces/routes/Orders';
import { IServiceReturnSuccess } from '../../interfaces/services';
import * as Model from '../../models/Orders';

const GetAll = async () => {
  const response = await Model.GetAll();

  const array: IOrder[] = [];

  response.forEach((e) => {
    const productsId = e.products.split(',');

    const productsIdNum = productsId.map((a) => +a);

    array.push({ ...e, products: productsIdNum });
  });

  const serviceResponse: IServiceReturnSuccess<IOrder[]> = { code: 200, data: array };

  return serviceResponse;
};

export default GetAll;
