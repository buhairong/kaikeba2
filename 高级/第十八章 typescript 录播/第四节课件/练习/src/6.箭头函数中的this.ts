let fn = (x: string) => {

}

interface T {
    a: number,
    fn: (x: number) => void
}

let obj2: T = {
    a: 1,
    fn(this: T, x: number) {
        return () => {
            this.a
        }
    }
}