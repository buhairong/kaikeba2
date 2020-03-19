import {Controller, Get} from "../libs";

@Controller('')
export default class Main {

    @Get('/')
    async index() {
        console.log('index');
        // ctx.body = 'index';
        return 'index';
    }

    method1() {
        console.log('method1');
    }

}