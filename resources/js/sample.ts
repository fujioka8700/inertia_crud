class Operator {
    public value: number;

    public constructor(value: number) {
        this.value = value;
    }

    public sum(value: number): this {
        this.value += value;
        return this;
    }

    public subtract(value: number): Operator {
        this.value -= value;
        return this;
    }

    public multiply(value: number): void {
        this.value *= value;
    }

    public divide(value: number): void {
        this.value /= value;
    }
}

const op: Operator = new Operator(0);
op.sum(5).subtract(2).multiply(5); // 15
console.log(op.value);

// op.subtract(3); // 2
// op.multiply(6); // 12
// op.divide(3); // 4
