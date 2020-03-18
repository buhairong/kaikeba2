class User1 {
    constructor(public id: number, public username: string) {
    }

    postArticle(title: string, content: string) {
        console.log(`${this.username} 发表了一篇文章：${title}`)
    }
}

class VIP extends User1 {
    constructor(
        id: number,
        username: string,
        public score: number
    ) {
        super(id, username)
        // 必须在super调用完之后才能访问 this
        this.id
        console.log('子类构造函数')
    }

    postAttachment(file: string): void {
        console.log(`${this.username} 上传了一个附件：${file}`)
    }

    /*
        重新实现了父类的方法: 参数的个数和参数的类型一致
    */
    /*postArticle(title: string, content: string) {
        this.score++
        console.log(`${this.username} 发表了一篇文章：${title}，积分：${this.score}`)
    }*/

    // 参数个数、参数类型不同：重载
    postArticle(title: string, content: string): void
    postArticle(title: string, content: string, file: string): void
    postArticle(title: string, content: string, file?: string){
        // 可以用super调用父类的成员，方法
        super.postArticle(title, content)
        if(file) {
            this.postAttachment(file)
        }
    }
}

let vip1 = new VIP(1, 'mt', 0)
vip1.postArticle('标题', '内容')
vip1.postAttachment('附件')