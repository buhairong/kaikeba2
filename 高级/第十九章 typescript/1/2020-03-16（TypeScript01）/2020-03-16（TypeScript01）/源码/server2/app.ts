import {bootstrapControllers} from 'koa-ts-controllers';
import Koa from 'koa';
import Router from 'koa-router';

(async function() {
    const app = new Koa();
    const router = new Router();

    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        versions: [1],
        controllers: [__dirname + '/controllers/**/*.ts']
    });


    app.listen(8080, () => {
        console.log('服务启动成功：http://localhost:8080');
    });
})();