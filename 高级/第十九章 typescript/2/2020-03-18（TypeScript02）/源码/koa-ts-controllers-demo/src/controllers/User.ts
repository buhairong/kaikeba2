import {
    Controller,
    Get
} from "koa-ts-controllers";

@Controller('/user')
export class User {

    @Get('/register')
    async reg() {
        return '这是注册页面';
    }

}