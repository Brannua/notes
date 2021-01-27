import { Pocker } from "./types";
import { Nums, Color } from "./enums";

// 创建一副牌
export function createPocker(): Pocker {
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
export function printPocker(pocker: Pocker) {
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