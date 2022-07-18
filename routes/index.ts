import { Router } from "../deps.ts";

const router = new Router();

router.get("/", (ctx, next) => {
    ctx.response.body = "pls wrk";
});

router.get("/author", (ctx, next) => {
    ctx.response.body = {
        name: "Marshell Wu"
    };
});

export default router;