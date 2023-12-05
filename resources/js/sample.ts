interface Human {
    think(): void;
}

interface Programmer {
    writeCode(): void;
}

class TypeScriptProgrammer implements Human, Programmer {
    think(): void {
        console.log("どういうコードにしようかな〜");
    }

    writeCode(): void {
        console.log("カタカタ");
    }
}

const obj: TypeScriptProgrammer = new TypeScriptProgrammer();

obj.think();
obj.writeCode();
