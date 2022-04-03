export interface IOrder {
  id: number;
  userId: number;
  products: number[];
}

export interface IOrderModel {
  id: number;
  userId: number;
  products: string;
}

export interface IOrderCreateRequest {
  products: number[];
}
