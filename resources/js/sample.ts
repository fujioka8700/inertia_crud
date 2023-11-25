export type Email = {
    from: string;
    to: string;
    title: string;
    subject: string;
};

const isEmail = (value: unknown): value is Email => {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    return true;
};

const email: Email = {
    from: "私",
    to: "あなた",
    title: "タイトル",
    subject: "サブジェクト",
};

const test = (params: unknown) => {
    if (isEmail(params)) {
        console.log("OK: ", params);
        return;
    }

    console.log("NG: ", params);
};

test(email);
