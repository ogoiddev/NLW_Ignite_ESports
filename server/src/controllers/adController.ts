import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { ConvertHoursToMinutes } from "../utils/convertHourToMinutes";
import { convertMinutesToHour } from "../utils/convertMinutesToHour";

const prisma = new PrismaClient()

export const getAllByGameId = async (req: Request, res: Response) => {
  const gameId = req.params.id;
  
  const results = await prisma.ad.findMany({
    select: { 
      id: true,
      gameId: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    }
  })

  res.status(200).json(results.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHour(ad.hourStart),
      hourEnd: convertMinutesToHour(ad.hourEnd),
    }
  }));
}

export const getDiscordFromAdById = async (req: Request, res: Response) => {
  const adId = req.params.id;

  const discord = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  res.status(200).json(discord);
}

export const saveNewAd = async (req: Request, res: Response) => {
  const gameId = req.params.id;
  const body: any = req.body;
  
  const ad = await prisma.ad.create({
    data: {
      gameId: gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: ConvertHoursToMinutes(body.hourStart),
      hourEnd: ConvertHoursToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  res.status(201).json(ad)

}

