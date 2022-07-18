import { z } from "../deps.ts";

export const Warehouse = z.object({
    name: z.string(),
    address: z.string()
});