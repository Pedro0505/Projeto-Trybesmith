import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/routes/Users';
import connection from './connection';

const Create = async ({ classe, level, password, username }: IUser): Promise<void> => {
  const QUERRY = `INSERT INTO Trybesmith.Users (classe, level, password, username) 
  VALUES (?, ?, ?, ?);`;
  await connection.execute<ResultSetHeader>(QUERRY, [classe, level, password, username]);
};

const lint = 'oi';

export { Create, lint };
