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

function assertIsDefined<T>(val: unknown): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new Error(`Expected 'val' to be defined, but received ${val}`);
    }
}

function isDuck(animal: Animal | Duck): animal is Duck {
    return animal instanceof Duck;
}

function animalOrDuck(animal: Animal | Duck | null): void {
    assertIsDefined(animal);
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

animalOrDuck(null);
