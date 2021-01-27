import { OneCard, Joker, Pocker } from "./interfaces";
import { Nums, Color } from "./enums";

// 创建一副牌
export function createPocker(): Pocker {
    // 一张牌的数组
    const pocker: Pocker = [];
    // const pocker: Pocker = {
    //     card:[]
    // };
    const vals = Object.values(Nums);
    const colors = Object.values(Color);
    for (const n of vals) {
        for (const c of colors) {
            // push普通卡牌使用类型兼容性
            // 注意: 若直接push对象字面量会有更严格的类型检查
            /* 
                const card: OneCard = {
                    color: c,
                    mark: n,
                    getString() {
                        return this.color + this.mark;
                    }
                }
                pocker.push(card)
            */
            // 或者使用类型断言( 这里使用的类型断言的第二种写法 )
            // 配合类型兼容性的概念
            // pocker.card.push(<OneCard>{
            pocker.push(<OneCard>{
                color: c,
                mark: n,
                getString() {
                    return this.color + this.mark;
                }
            })
        }
    }
    // 加入大小王牌
    let joker: Joker = {
        type: "small",
        getString() {
            return "jo";
        }
    }
    // pocker.card.push(joker);
    pocker.push(joker);
    joker = {
        type: "big",
        getString() {
            return "JO";
        }
    }
    // pocker.card.push(joker);
    pocker.push(joker);

    return pocker;
}
// 打印一副牌
export function printPocker(pocker: Pocker) {
    let str = "";
    // pocker.card.forEach((item, i) => {
    pocker.forEach((item, i) => {
        // 换行
        if (i !== 0 && i % 4 === 0) {
            str += "\n";
        }
        // 拼接字符串(通过getString方法获得牌面)
        str = str + item.getString() + " ";
    });
    // 打印扑克牌
    console.log(str);
}