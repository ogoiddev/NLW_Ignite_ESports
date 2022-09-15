import { Router } from 'express';
import { getAll } from '../controllers/gameController';

const GameRoute = Router()

GameRoute.get('/games', getAll);

export default  GameRoute;  