import Koa from 'koa';
import Router from 'koa-router';
import glob from 'glob';
import KoaBodyParser from 'koa-bodyparser';

interface IOptions {
    basePath: string;
    version: number;
    controllers: string;
}

const router = new Router();

export function bootstrapControllers(
    app: Koa,
    options: IOptions
) {

    app.use( KoaBodyParser() );

    /**
     * 根据传入的 controllers 配置，收集所有的具有装饰器的类与对应的方法
     * 根据装饰器的名称（Get、Post）以及装饰器的参数-路径，还有被装饰的方法来进行路由注册
     */

    // router.get('/', new Main().index)
    let files = glob.sync(options.controllers);
    // console.log(files);

    files.forEach( file => {
        const Controller = require(file).default;
        // console.log(Controller);

        let controller = new Controller();

        // router.get('/', controller.index);
        // router.get('/user/register', controller.register);

        // router.get(target.constructor.__path, path, descriptor.value);

        // console.log(Controller.__path);
        // console.log(Controller.__routers);

        Controller.__routers.forEach( r => {


            // console.log(options.basePath + '/v' + options.version + Controller.__path + r.path);
            router[r.method](
                options.basePath + '/v' + options.version + Controller.__path + r.path,
                async function(ctx) {
                    // console.log('...', controller.__inject);

                    let args = [];

                    if (controller.__inject) {
                        let injects = controller.__inject.filter(inject  => inject.name === r.name);
                        // console.log(injects);
                        if (injects) {
                            injects.forEach(inject => {
                                if (inject.type === 'query') {
                                    args[inject.index] = ctx.query;
                                }
                                if (inject.type === 'body') {
                                    args[inject.index] = ctx.request.body;
                                }
                            });
                        }
                    }
                    // console.log(args);

                    let body = await controller[r.name](
                        ...args
                    );
                    ctx.body = body;
                }
            );
        } );

        // console.log('===================');
    } );

    // console.log(router);

    app.use(router.routes());
}

export function Controller(path: string) {
    return function(target: any) {
        target.__path = path;
    }
}

export function Get(path: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        // 这里获取不到，Get是方法装饰器，Controller 是类装饰器，方法装饰器要早于类装饰器执行
        // router.get(target.constructor.__path, path, descriptor.value);

        // target.constructor.__routers = [
        //     {method: 'get', path: '/register', name}
        // ];
        if (!target.constructor.__routers) {
            target.constructor.__routers = [];
        }
        target.constructor.__routers.push({
            method: 'get',
            path,
            name
        });

    }
}

export function Post(path: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        if (!target.constructor.__routers) {
            target.constructor.__routers = [];
        }
        target.constructor.__routers.push({
            method: 'post',
            path,
            name
        });

    }
}

export function Query() {
    return function(target: any, name: string, index: number) {
        // console.log(target, name, index);
        if (!target.__inject) {
            target.__inject = [];
        }
        target.__inject.push({
            type: 'query',
            name,
            index
        });
    }
}

export function Body() {
    return function(target: any, name: string, index: number) {
        // console.log(target, name, index);
        if (!target.__inject) {
            target.__inject = [];
        }
        target.__inject.push({
            type: 'body',
            name,
            index
        });
    }
}