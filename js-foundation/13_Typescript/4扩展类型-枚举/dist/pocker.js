/* *
 * 利用枚举优化创建扑克牌并打印的功能( 不包括大小王 )
 */
// 枚举花色
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color || (Color = {}));
// 枚举牌面
var Nums;
(function (Nums) {
    Nums["one"] = "A";
    Nums["two"] = "2";
    Nums["three"] = "3";
    Nums["four"] = "4";
    Nums["five"] = "5";
    Nums["six"] = "6";
    Nums["seven"] = "7";
    Nums["eight"] = "8";
    Nums["nine"] = "9";
    Nums["ten"] = "10";
    Nums["eleven"] = "J";
    Nums["twelve"] = "Q";
    Nums["king"] = "K";
})(Nums || (Nums = {}));
function createPocker() {
    const pocker = [];
    const vals = Object.values(Nums);
    const colors = Object.values(Color);
    for (const n of vals) {
        for (const c of colors) {
            pocker.push({
                color: c,
                mark: n
            });
        }
    }
    // console.log(pocker);
    return pocker;
}
// 打印一副牌
function printPocker(pocker) {
    let str = "";
    pocker.forEach((item, i) => {
        // 换行
        if (i !== 0 && i % 4 === 0) {
            str += "\n";
        }
        // console.log(item);
        str = str + item.color + item.mark + " ";
    });
    console.log(str);
}
const pocker = createPocker();
printPocker(pocker);
