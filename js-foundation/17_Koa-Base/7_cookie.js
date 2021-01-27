const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.url === '/lpj') {
        ctx.cookies.set('name', 'lpj', {
            domain: 'localhost',
            path: '/lpj',
            maxAge: 24 * 60 * 60 * 1000,
            expires: new Date('2019-10-01'),
            httpOnly: false,
            overwrite: false
        })
    }
    ctx.body = 'Koa2';
})

app.listen(3000, () => {
    console.log("Listening on port 3000.");
});