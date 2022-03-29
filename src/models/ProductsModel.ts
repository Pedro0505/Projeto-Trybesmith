import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ICreateRequest, ICreateResponse, IGetAllResponse } from '../interfaces/routes/Products';
import connection from './connection';

const GetAll = async (): Promise<IGetAllResponse[]> => {
  const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

  return result as IGetAllResponse[];
};

const Create = async ({ amount, name }: ICreateRequest): Promise<ICreateResponse> => {
  const QUERRY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
  const [result] = await connection.execute<ResultSetHeader>(QUERRY, [name, amount]);

  const created: ICreateResponse = {
    item: {
      id: result.insertId,
      amount,
      name,
    },
  };

  return created;
};

export { GetAll, Create };
