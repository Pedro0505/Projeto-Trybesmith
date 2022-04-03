import * as Model from '../../models/Orders';

const Create = async (products: number[], userId: number) => {
  await Promise.all(products.map((e) => (
    Model.Create(userId, e)
  )));
};

export default Create;
