class Animal {
    walk() {
        return "ペタペタ";
    }
}

class Duck {
    quacks() {
        return "ガーガー";
    }
}

function isDuck(animal: Animal | Duck): animal is Duck {
    return animal instanceof Duck;
}

function animalOrDuck(animal: Animal | Duck): void {
    if (isDuck(animal)) {
        console.log(animal.quacks());
    } else {
        console.log(animal.walk());
    }
}

const duck = new Duck();
animalOrDuck(duck);

const animal = new Animal();
animalOrDuck(animal);
