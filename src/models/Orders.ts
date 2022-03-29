import { RowDataPacket } from 'mysql2';
import { IOrderModel } from '../interfaces/routes/Orders';
import connection from './connection';

const GetAll = async (): Promise<IOrderModel[]> => {
  const QUERRY = `SELECT O.id, O.userId, group_concat(P.id) AS products FROM 
  Trybesmith.Orders AS O INNER JOIN Trybesmith.Products AS P ON P.orderId = O.id 
  GROUP BY O.id ORDER BY O.userId;`;

  const [result] = await connection.execute<RowDataPacket[]>(QUERRY);

  return result as IOrderModel[];
};

const lint = 'chato';

export { lint, GetAll };
