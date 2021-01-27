/* *
 * 创建一副扑克牌( 不包括大小王 ), 打印该扑克牌
 */
// 自定义类型: 花色
type Color = "♥" | "♣" | "♦" | "♠";
// 自定义类型: 一张牌
type OneCard = {
    color: Color
    mark: number
};
// 自定义类型: 一副牌
type Pocker = OneCard[];
// 创建一副牌( 不包括大小王 )
function createPocker(): Pocker {
    const pocker: Pocker = [];
    for (let i = 1; i <= 13; i++) {
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
function printPocker(pocker: Pocker) {
    let str = "";
    pocker.forEach((item, i) => {
        // 换行
        if (i !== 0 && i % 4 === 0) {
            str += "\n";
        }
        // 拼接字符串
        str += item.color;
        if (item.mark === 1) {
            str += "A ";
        }
        else if (item.mark <= 10 && item.mark > 1) {
            str = str + item.mark + " ";
        }
        else if (item.mark === 11) {
            str += "J ";
        }
        else if (item.mark === 12) {
            str += "Q ";
        }
        else if (item.mark === 13) {
            str += "K ";
        }
    });
    // 打印扑克牌
    console.log(str);
}

printPocker(createPocker());