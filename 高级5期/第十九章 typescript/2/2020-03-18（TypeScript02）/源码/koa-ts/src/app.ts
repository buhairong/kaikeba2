import {bootstrapControllers} from './libs';
import Koa from 'koa';

(async function() {

    const app = new Koa();


    await bootstrapControllers(app, {
        basePath: '/api',
        version: 1,
        controllers: __dirname + '/controllers/**/*'
    });

    // app.use(router.routes());

    app.listen(9090, () => {
        console.log('启动成功：http://localhost:9090');
    })

})();