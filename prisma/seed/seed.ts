import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const movieOne = await prisma.movie.create({
        data: {
            genre: 'Comedy',
            duration: 120,
            title: 'Movie One',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieTwo = await prisma.movie.create({
        data: {
            genre: 'Action',
            duration: 90,
            title: 'Movie Two',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieThree = await prisma.movie.create({
        data: {
            genre: 'Adventure',
            duration: 80,
            title: 'Movie Three',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieFour = await prisma.movie.create({
        data: {
            genre: 'Fantasy',
            duration: 110,
            title: 'Movie Four',
            published_at: null,
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieFive = await prisma.movie.create({
        data: {
            genre: 'Action',
            duration: 110,
            title: 'Movie Five',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieSix = await prisma.movie.create({
        data: {
            genre: 'Comedy',
            duration: 110,
            title: 'Movie Six',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    const movieSeven = await prisma.movie.create({
        data: {
            genre: 'Action',
            duration: 110,
            title: 'Movie Seven',
            published_at: new Date(),
            reviews: {
                createMany: {
                    data: [
                        {
                            review: 'Review One',
                        },
                        {
                            review: 'Review Two',
                        }
                    ]
                },
            },
        },
    })
    console.log({ movieOne })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })