
import { Color, Nums } from "./enums";
import { Pocker } from "./pocker";

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
// 自定义接口: 发牌的结果
export interface DealResult {
    player1: Pocker
    player2: Pocker
    player3: Pocker
    left: Pocker
}