interface Human {
    name: string;
}

class Developer implements Human {
    name: string = "Bob";
}

const dev: Developer = new Developer();
console.log(dev.name);
