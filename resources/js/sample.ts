const oneSecond = 1000;
const timer = {
    message: "時間です！",
    start: function () {
        console.log(this); // ❶

        // 従来の関数
        setTimeout(function () {
            console.log(this.message); // ❷
        }, oneSecond);

        // アロー関数
        setTimeout(() => {
            console.log(this.message); // ❸
        }, oneSecond);
    },
};
timer.start();
