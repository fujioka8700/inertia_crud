// TypeScript
class Person {
    public name: string;

    constructor() {
        this.name = "";
    }
}
const alice = new Person();
console.log(alice.name);

alice.name = "Alice";
console.log(alice.name);
