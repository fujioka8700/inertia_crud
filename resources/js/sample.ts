// example.ts
class ConstructorInAccessModifier {
    constructor(
        arg0: number,
        public arg1: number,
        protected arg2: number,
        private arg3: number
    ) {
        console.log({ arg0, arg1, arg2, arg3 });
    }
}

class ConstructorOutAccessModifier {
    public arg1: number;
    protected arg2: number;
    private arg3: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 });
    }
}

const obj = new ConstructorInAccessModifier(1, 2, 3, 4);
const obj2 = new ConstructorOutAccessModifier(10, 20, 30, 40);
