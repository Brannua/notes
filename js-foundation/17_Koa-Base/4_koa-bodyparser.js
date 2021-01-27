const Koa = require('koa');
const app = new Koa();

/* post参数解析中间件 */
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

app.use(async ctx => {
    let data = ctx.request.body;
    console.log(data);
    ctx.body = 'Koa2';
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000.");
});