import Koa from 'koa';
import KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = 'Hello Kaikeba！！！';
});

app.use(router.routes());


app.listen(8080, () => {
    console.log('服务启动成功：http://localhost:8080');
});