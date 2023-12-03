abstract class Food {
    constructor(protected name: string, protected calorie: number) {}
    showDebug() {
        console.log(`name = ${this.name} `);
        console.log(`calorie = ${this.calorie}kcal `);
    }
    abstract keepRefrigerated(): boolean;
}

class Meat extends Food {
    keepRefrigerated(): boolean {
        return true;
    }
}
