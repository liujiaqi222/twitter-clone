import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Prevent multiple instances of Prisma Client in development
const client = globalThis.prisma || new PrismaClient();

// Enable the prisma global object in development
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
