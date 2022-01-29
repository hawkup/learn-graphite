import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const kody = await prisma.user.create({
    data: {
      username: 'kody',
      passwordHash: '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u'
    }
  })
}

seed()
