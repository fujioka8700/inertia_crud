interface Cat {
    type: "cat";
    sound: "meow";
}

interface Dog {
    type: "dog";
    sound: "woof";
}

function isCat(animal: Cat | Dog): animal is Cat {
    return animal.type === "cat";
}

function makeSoundWithGuard(animal: Cat | Dog) {
    if (isCat(animal)) {
        console.log(animal.sound); // 出力結果: meow
    } else {
        console.log(animal.sound); // 出力結果: woof
    }
}

const cat: Cat = {
    type: "cat",
    sound: "meow",
};

const dog: Dog = {
    type: "dog",
    sound: "woof",
};

makeSoundWithGuard(cat);
makeSoundWithGuard(dog);
