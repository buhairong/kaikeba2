import {
    Controller,
    Get
} from 'koa-ts-controllers';

@Controller('')
export class Main {

    @Get('/')
    async index() {
        return 'Index';
    }

}