class UserId {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }
}

class GroupId {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }
}

const userId: UserId = new GroupId("...");
// Type 'GroupId' is not assignable to type 'UserId'.
//   Types have separate declarations of a private property 'id'.
