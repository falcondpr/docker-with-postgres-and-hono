import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import user from "./routes/user";

const app = new Hono();

app.use(logger());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/users", user);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
