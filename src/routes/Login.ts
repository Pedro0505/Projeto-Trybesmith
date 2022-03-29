import express from 'express';
import * as Controllers from '../controllers/Login';
import * as Middlewares from '../middlewares';

const LoginRoutes = express.Router();

LoginRoutes.post('/', Middlewares.LoginValidate, Controllers.Login);

export default LoginRoutes;
