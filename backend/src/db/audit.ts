import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function appendAuditLog({eventType, userId, details, refId}) {
  return await prisma.auditLog.create({data: {eventType, userId: userId ?? null, details, refId: refId ?? null}});
}
