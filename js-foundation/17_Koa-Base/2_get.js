const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.querystring;
    console.log("url: ", url);
    console.log("query: ", query);
    console.log("queryString: ", queryString);
    ctx.body = 'koa2';
})

app.listen(3000, ()=>{
    console.log("listen on port 3000.");
});