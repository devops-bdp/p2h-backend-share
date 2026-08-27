import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma/client.js';
dotenv.config();
const globalForPrisma = globalThis;
const databaseUrl = process.env.DATABASE_URL || '';
export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        accelerateUrl: databaseUrl,
        log: process.env.NODE_ENV === 'development'
            ? ['query', 'error', 'warn']
            : ['error'],
    });
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
export * from '../generated/prisma/client.js';
//# sourceMappingURL=prisma.js.map