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
    const movieId = +(req?.query?.movieId ?? -1)
    const reviewsList = await prisma.movie.findUnique({
        where: {
            id: movieId
        },
        include: {
            Review: true
        }
    })
    res.status(200).json(reviewsList as unknown as Data)
}
