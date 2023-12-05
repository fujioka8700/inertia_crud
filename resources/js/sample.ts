interface Human {
    think(): void;
}

class Developer implements Human {
    think(): void {
        console.log("どういう実装にしようかな〜");
    }
}

const obj: Developer = new Developer();
obj.think();
