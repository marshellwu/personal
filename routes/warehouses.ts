import { Router } from "../deps.ts";
import { WarehouseSchema } from "../schemas/warehouse.ts";

import { client } from "../db.ts";

const router = new Router();

router.post("/warehouses", async (ctx, next) => {
    const warehouse = await ctx.request.body().value;
    
    const validation = WarehouseSchema.safeParse(warehouse);
    
    if (!validation.success) return ctx.response.body = "pls be careful";
    
    await client.connect();
    await client.queryObject("INSERT INTO warehouses VALUES(${warehouse.name}, ${warehouse.address})`");
    await client.end();

    ctx.response.body = warehouse;
});

router.get("/warehouses", async (ctx, next) => {
    await client.connect();
    const warehouses = await client.queryArray("SELECT name, address FROM warehouses");
    await client.end();

    ctx.response.body = warehouses;
})

export default router;