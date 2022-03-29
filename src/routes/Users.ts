import express from 'express';
import * as Controllers from '../controllers/Users';
import * as Middlewares from '../middlewares';

const UsersRoutes = express.Router();

UsersRoutes.post('/', Middlewares.UsersValidate, Controllers.Create);

export default UsersRoutes;
