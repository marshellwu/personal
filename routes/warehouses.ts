import { Router } from "../deps.ts";
import { Warehouse } from "../schemas/warehouse.ts";

const router = new Router();

router.post("/warehouses", async (ctx, next) => {
    const warehouse = await ctx.request.body().value;
    
    const validation = Warehouse.safeParse(warehouse);
    
    if (!validation.success) return ctx.response.body = "pls be careful";
    
    ctx.response.body = warehouse;
});

export default router;