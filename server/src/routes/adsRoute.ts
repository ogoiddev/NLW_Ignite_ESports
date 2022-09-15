import { Router } from 'express';
import { getAllByGameId, getDiscordFromAdById, saveNewAd } from '../controllers/adController';

const AdsRoute = Router()

AdsRoute.post('/games/:id/ads', saveNewAd);

AdsRoute.get('/games/:id/ads', getAllByGameId);
AdsRoute.get('/ads/:id/discord', getDiscordFromAdById);



export default AdsRoute;
