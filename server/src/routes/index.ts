import { Router } from 'express';
import AdsRoute from './adsRoute';
import GameRoute from './gameRoute'

const Routes = Router();

Routes.use(AdsRoute);
Routes.use(GameRoute);

export default Routes;