import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient({
  log: ['query']
})


export const getAll = async (_req: Request, res: Response) => {
  const results = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })
  res.status(200).json(results)
}


