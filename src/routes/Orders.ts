import express from 'express';
import * as Controllers from '../controllers/Orders';
import * as Middlewares from '../middlewares';

const OrdersRoutes = express.Router();

OrdersRoutes.get('/', Controllers.GetAll);
OrdersRoutes.post(
  '/', 
  Middlewares.Auth,
  Middlewares.OrderValidate, 
  Controllers.Create,
);

export default OrdersRoutes;
