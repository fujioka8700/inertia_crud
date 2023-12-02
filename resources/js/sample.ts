// 1秒後に値を返す
function request(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000);
    });
}

// この書き方はできない
// const result = await request();
// console.log(result);

async function main() {
    const result = await request();
    console.log(result);
    // @log: "hello"
}

main();
