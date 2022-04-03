import { JwtPayload } from 'jsonwebtoken';

export interface IPayloadJwt {
  id?: number;
  username: string;
}

export interface IDecoded extends JwtPayload {
  tokenData: IPayloadJwt
}
