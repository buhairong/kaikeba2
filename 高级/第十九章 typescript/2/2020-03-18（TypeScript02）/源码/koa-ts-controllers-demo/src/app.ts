import {bootstrapControllers} from 'koa-ts-controllers';
import Koa from 'koa';
import Router from 'koa-router';

(async function() {

    const app = new Koa();
    const router = new Router();

    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        controllers: [
            __dirname + '/controllers/**/*'
        ],
        versions: [1],
        errorHandler: async (err, ctx) => {
            ctx.body = { error: err};
            ctx.status = 500;
        }
    });

    app.use(router.routes());

    app.listen(9090, () => {
        console.log('启动成功：http://localhost:9090');
    })

})();