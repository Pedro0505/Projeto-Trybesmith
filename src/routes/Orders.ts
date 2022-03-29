import express from 'express';
import * as Controllers from '../controllers/Orders';

const OrdersRoutes = express.Router();

OrdersRoutes.get('/', Controllers.GetAll);

export default OrdersRoutes;
