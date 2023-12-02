type MyObject = { key: string };
const myObject: MyObject = { key: "" };
myObject.key = "value"; // プロパティを追加

class MyClass {}
MyClass.key = "value"; // プロパティを追加

myObject.key = "100";
console.log(myObject.key);
