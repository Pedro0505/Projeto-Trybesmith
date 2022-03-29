import { RowDataPacket } from 'mysql2';
import { GetAllResponse } from '../interfaces/routes/Products';
import connection from './connection';

const GetAll = async (): Promise<GetAllResponse[]> => {
  const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

  return result as GetAllResponse[];
};

const lint = 'oi';

export { GetAll, lint };
