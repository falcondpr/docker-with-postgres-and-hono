import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const user = new Hono();
const prisma = new PrismaClient();

user
  .post("/", async (c) => {
    const body = await c.req.json();

    const newUser = await prisma.user.create({
      data: body,
    });

    return c.json(newUser, 201);
  })
  .get("/", async (c) => {
    const users = await prisma.user.findMany();
    return c.json(users);
  });

export default user;
