const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    let data = '';
    ctx.req.on('data', chunk=>{
        data+=chunk;
    });
    ctx.req.on('end', ()=>{
        data = decodeURI(data);
        console.log(data);
    });
    
    ctx.body = 'Koa2';
});

app.listen(3000, ()=>{
    console.log("listening on port 3000.");
});