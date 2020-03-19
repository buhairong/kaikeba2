import {Controller, Get, Query, Post, Body} from "../libs";

@Controller('/user')
export default class User {

    @Get('/register')
    async register(
        @Query() q
    ) {
        // ctx.body = '注册';
        console.log(q);
        return 'register';
    }

    @Get('/login')
    async login(
        @Query() q
    ) {
        // ctx.body = '登录';
        console.log(q);
        return 'register';
    }

    @Post('/login')
    async loginPost(
        @Body() body,
        @Query() q
    ) {
        // DI：依赖注入 IoC
        // ctx.body = '登录';
        console.log('query', q);
        console.log('body', body);
        return '登录验证';
    }

}