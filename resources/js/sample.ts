class ClassA {}
class ClassB extends ClassA {}
const a = new ClassA();
console.log(a instanceof ClassA);
// true

console.log(a instanceof ClassB);
// false

const b: ClassB = new ClassB();

console.log(b instanceof ClassA); // true
console.log(b instanceof ClassB); // true
