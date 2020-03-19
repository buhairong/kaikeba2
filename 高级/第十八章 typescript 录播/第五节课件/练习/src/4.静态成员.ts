type IAllowFileTypeList = 'png' | 'gif' | 'jpg' | 'jpeg' | 'webp'

class User3 {
    static readonly ALLOW_FILE_TYPE_LIST: Array<IAllowFileTypeList> =
        ['png', 'gif', 'jpg', 'jpeg', 'webp']

    constructor(
        public id: number,
        public username: string,
        private _allowFileTypes: Array<IAllowFileTypeList>
    ) {

    }

    static info(): void {
        console.log(User3.ALLOW_FILE_TYPE_LIST)
    }
}

let user2 = new User3(1, 'mt', ['png', 'gif'])
User3.ALLOW_FILE_TYPE_LIST
User3.info()