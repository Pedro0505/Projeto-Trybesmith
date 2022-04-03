import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrderModel } from '../interfaces/routes/Orders';
import connection from './connection';

const GetAll = async (): Promise<IOrderModel[]> => {
  const QUERRY = `SELECT O.id, O.userId, group_concat(P.id) AS products FROM 
  Trybesmith.Orders AS O INNER JOIN Trybesmith.Products AS P ON P.orderId = O.id 
  GROUP BY O.id ORDER BY O.userId;`;

  const [result] = await connection.execute<RowDataPacket[]>(QUERRY);

  return result as IOrderModel[];
};

const Create = async (userId: number, productId: number) => {
  const QUERRY = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

  const [result] = await connection.execute<ResultSetHeader>(QUERRY, [userId]);

  const QUERRYUPDATE = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

  await connection.execute<ResultSetHeader>(QUERRYUPDATE, [result.insertId, productId]);
};

export { Create, GetAll };
