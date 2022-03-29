import express from 'express';
import * as Controllers from '../controllers/Products';

const ProductsRoutes = express.Router();

ProductsRoutes.get('/', Controllers.GetAll);

export default ProductsRoutes;
