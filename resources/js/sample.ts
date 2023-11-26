class Male {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(): string {
        // return "hello";
        return `Monsieur ${this.name}`;
    }
}

class Female {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(this: Female): string {
        return `Madame ${this.name}`;
    }
}

let male: Male = new Male("Frédéric");
const female: Female = new Female("Frédérique");

let maleToStr: () => string = male.toString;
const femaleToStr: (this: Female) => string = female.toString;
