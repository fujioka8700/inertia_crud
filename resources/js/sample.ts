//親クラス

abstract class Department {
    static fiscalYear = 2021;
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(protected readonly id: string, public name: string) {
        console.log(Department.fiscalYear);
    }

    abstract describe(this: Department): void;
}

//サブクラス1

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    //親クラスのabstractメソッドをサブクラスで実装する必要がある
    describe() {
        console.log("IT部署 - ID: " + this.id);
    }
}

//サブクラス2

class AccountingDepartment extends Department {
    private lastReport: string | undefined;

    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    //親クラスのabstractメソッドをサブクラスで実装する必要がある
    describe() {
        console.log("会計部署 - ID: " + this.id);
    }
}

const kaikei: AccountingDepartment = new AccountingDepartment("100", [
    "tanaka",
    "sato",
]);
kaikei.describe();

const it: ITDepartment = new ITDepartment("200", ["goto", "kimura"]);
it.describe();
