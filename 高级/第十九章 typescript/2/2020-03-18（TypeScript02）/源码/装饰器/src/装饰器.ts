import fs from 'fs';

function log(type: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        // console.log(target);
        // console.log(name);
        // console.log(descriptor);        // defineProperty(obj, 'x', {})

        let value = descriptor.value;
        descriptor.value = function() {
            // console.log('日志');

            if (type === 'console') {
                console.log('日志');
            }

            if (type === 'storage') {
                fs.writeFileSync('./日志.log', '这是日志内容');
            }

            value();
        }
    }
}

class Store {

    @log('console')
    dispatch() {
        console.log('修改了state');
    }

    @log('storage')
    method1() {
        console.log('method1');
    }

}

let store = new Store();
// store.dispatch();
store.method1();