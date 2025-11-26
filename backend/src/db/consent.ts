import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function recordConsent({ userId, acceptedAt, statement, ip, notes }) {
  return await prisma.consent.create({
    data: {
      userId: userId ?? null,
      acceptedAt: acceptedAt instanceof Date ? acceptedAt : new Date(acceptedAt),
      statement,
      ip: ip ?? null,
      notes: notes ?? null
    }
  });
}
