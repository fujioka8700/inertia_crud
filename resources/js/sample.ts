class Greeter {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

const greeter: Greeter = new Greeter();
console.log(greeter.greet("Taro"));
