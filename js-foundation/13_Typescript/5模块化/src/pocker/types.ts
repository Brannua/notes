import { Color, Nums } from "./enums";

// 自定义类型: 一张牌
export type OneCard = {
    color: Color
    mark: Nums
}
// 自定义类型: 一副牌
export type Pocker = OneCard[];