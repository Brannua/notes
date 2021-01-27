/* *
 * 利用枚举优化创建扑克牌并打印的功能( 不包括大小王 )
 */
// 枚举花色
enum Color {
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"
}
// 枚举牌面
enum Nums {
    one = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
// 自定义类型: 一张牌
type OneCard = {
    color: Color
    mark: Nums
}
// 自定义类型: 一副牌
type Pocker = OneCard[];

function createPocker(): Pocker {
    const pocker: Pocker = [];
    const vals = Object.values(Nums);
    const colors = Object.values(Color);
    for (const n of vals) {
        for (const c of colors) {
            pocker.push({
                color: c,
                mark: n
            })
        }
    }
    // console.log(pocker);
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
        str = str + item.color + item.mark + " ";
    });
    // 打印扑克牌
    console.log(str);
}

const pocker = createPocker();
printPocker(pocker);