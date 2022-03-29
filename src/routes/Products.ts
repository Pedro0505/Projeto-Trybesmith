import express from 'express';
import * as Controllers from '../controllers/Products';
import * as Middlewares from '../middlewares';

const ProductsRoutes = express.Router();

ProductsRoutes.get('/', Controllers.GetAll);
ProductsRoutes.post('/', Middlewares.ProductValidate, Controllers.Create);

export default ProductsRoutes;
