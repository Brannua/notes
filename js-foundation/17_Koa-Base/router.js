const Koa = require('koa');
const app = new Koa();

/* koa-router */
const Router = require('koa-router');
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/abc', (ctx, next) => {
    console.log(ctx);
    console.log(next);
    ctx.body = 'Koa2';
});

app.listen(3000, () => {
    console.log("Listening on port 3000.");
});