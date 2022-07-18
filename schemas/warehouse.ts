import { z } from "../deps.ts";

export const WarehouseSchema = z.object({
    name: z.string(),
    address: z.string()
});