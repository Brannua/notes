// 创建一副牌( 不包括大小王 )
function createPocker() {
    const pocker = [];
    for (let i = 1; i < 13; i++) {
        pocker.push({
            color: "♠",
            "mark": i
        });
        pocker.push({
            color: "♣",
            "mark": i
        });
        pocker.push({
            color: "♥",
            "mark": i
        });
        pocker.push({
            color: "♦",
            "mark": i
        });
    }
    return pocker;
}
// 打印一副牌
function printPocker(pocker) {
    pocker.forEach(item => {
        let str = item.color;
        if (item.mark === 1) {
            str += "A";
        }
        else if (item.mark <= 10 && item.mark > 1) {
            str += item.mark;
        }
        else if (item.mark === 11) {
            str += "J";
        }
        else if (item.mark === 12) {
            str += "Q";
        }
        else if (item.mark === 13) {
            str += "K";
        }
        console.log(str);
    });
}
