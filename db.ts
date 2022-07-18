import { Client } from "./deps.ts";

export const client = new Client({
    user: 'postgres',
    database: 'postgres',
    hostname: 'db.wrljzeovxmwzmbtaquwy.supabase.co',
    port: 5432,
    password: Deno.env.get("DB_PASS")
});