// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const moviesList = await prisma.movie.findMany({
    where: {
      NOT: {
        published_at: {}
      }
    }
  })
  res.status(200).json(moviesList as unknown as Data)
}
