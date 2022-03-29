import express from 'express';
import * as Routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', Routes.ProductsRoutes);
app.use('/users', Routes.UsersRoutes);
app.use('/orders', Routes.OrdersRoutes);
app.use('/login', Routes.LoginRoutes);

export default app;
