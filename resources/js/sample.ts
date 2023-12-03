class Parent {
    constructor() {
        console.log("This is Parent.");
    }
}
class Child extends Parent {
    constructor() {
        super();
    }
}

new Child();
