import { client } from "./db.ts";
import { Application } from "./deps.ts";

import Index from "./routes/index.ts";
import Warehouses from "./routes/warehouses.ts";

const app = new Application();

app.use(Index.routes());
app.use(Index.allowedMethods());
app.use(Warehouses.routes());
app.use(Warehouses.allowedMethods());

await client.connect();
await client.queryArray("CREATE TABLE warehouses (name VARCHAR(100), address TEXT)");
await client.end();

await app.listen({ port: 8000 });
