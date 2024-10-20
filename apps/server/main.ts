import { Hono } from "hono";

import { add, square } from "@monorepo/calculator";

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));
app.get(
  "/add/:first/:second",
  (c) => c.json(add(Number(c.req.param().first), Number(c.req.param().second))),
);
app.get("/square/:value", (c) => c.json(square(Number(c.req.param().value))));

Deno.serve({ port: 8000 }, app.fetch);
