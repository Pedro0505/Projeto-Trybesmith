interface IGetAllResponse {
  id: number;
  name: string;
  amount: string;
  orderId: number | null;
}

interface ICreateRequest {
  name: string;
  amount: string;
}

interface IItem extends ICreateRequest {
  id: number;
}

interface ICreateResponse {
  item: IItem
}

export { IGetAllResponse, ICreateRequest, ICreateResponse };
