import { Color, Nums } from "./enums";

// 自定义接口: 一张牌
export interface Card {
    getString(): string
}
// 自定义接口: 普通牌
export interface OneCard extends Card {
    color: Color
    mark: Nums
}
// 自定义接口: 大小王
export interface Joker extends Card {
    type: "big" | "small"
}

// 自定义类型: 一副牌
// export type Pocker = (OneCard | Joker)[];
export type Pocker = Card[];
// 自定义接口: 一副牌
// export interface Pocker {
//     card: Card[];
// }