class Octopus {
    readonly name: string;
    readonly legs = 8; // フィールド初期化子での代入はOK

    constructor() {
        this.name = "たこちゃん"; // コンストラクターでの代入はOK
    }

    setName(newName: string) {
        this.name = newName;
    }
}

const oct: Octopus = new Octopus();
oct.setName("新しいたこちゃん");
console.log(oct.name);
