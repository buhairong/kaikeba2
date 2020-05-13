import {
    Controller, Get
} from 'koa-ts-controllers';


@Controller('')
export class MainController {

    @Get('/')
    public async index() {
        return 'Hello Kaikeba';
    }

}