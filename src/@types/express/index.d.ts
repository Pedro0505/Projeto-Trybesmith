import { IPayloadJwt } from '../../interfaces/helpers';

declare module 'express-serve-static-core' {
  interface Request {
    tokenData: IPayloadJwt;
  }
}
