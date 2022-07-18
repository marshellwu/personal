import { Application } from "./deps.ts";

import Index from "./routes/index.ts";
import Warehouses from "./routes/warehouses.ts";

const app = new Application();

app.use(Index.routes());
app.use(Index.allowedMethods());
app.use(Warehouses.routes());
app.use(Warehouses.allowedMethods());

await app.listen({ port: 8000 });
