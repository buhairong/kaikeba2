interface T {
    a: number,
    fn: (x: number) => void
}

let obj = {
    a: 1,
    fn(this: T, x: number) {
        this.a
    }
}