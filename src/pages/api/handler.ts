import type { NextApiRequest, NextApiResponse } from "next";
import { StoreType } from "@/interface";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>
) {
  const { page = "1" }: { page?: string } = req.query;
  const prisma = new PrismaClient();
  const skipPage = parseInt(page) - 1;

  const stores = await prisma.store.findMany({
    orderBy: { id: "asc" },
    take: 10,
    skip: skipPage * 10,
  });

  res.status(200).json(stores);
}
