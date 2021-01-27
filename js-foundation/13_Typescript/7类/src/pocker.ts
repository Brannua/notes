
import { Card, OneCard, Joker, DealResult } from "./interfaces";
import { Nums, Color } from "./enums";

// 一叠牌
export class Pocker {

    private cards: Card[] = [];

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.init();
        }
    }
    /**
     * 初始化一副牌
     */
    private init() {
        const vals = Object.values(Nums);
        const colors = Object.values(Color);

        for (const n of vals) {
            for (const c of colors) {
                this.cards.push(<OneCard>{
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
        this.cards.push(joker);
        joker = {
            type: "big",
            getString() {
                return "JO";
            }
        }
        this.cards.push(joker);
    }
    /**
     * 打印一副牌
     */
    print() {
        let str = "";
        this.cards.forEach((item, i) => {
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
    /**
     * 洗牌
     */
    shuffle() {
        /**
         * 遍历扑克牌数组,每拿出一张牌就同时生成随机数,
         * 并将该牌与以该随机数为下标的扑克牌互换位置
         * 来完成洗牌
         */
        for (let i = 0; i < this.cards.length; i++) {
            const target: number = this.getRandom(0, this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[target];
            this.cards[target] = temp;
        }
    }
    /**
     * 洗牌的辅助函数
     * @param min 
     * @param max ( 无法取到最大值 )
     */
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(min + Math.random() * dec);
    }

    /**
     * 发牌
     * 发完牌后,得到的结果有4个card[]
     * 可以利用元祖或接口的形式来约束返回值类型
     */
    dealCards(): DealResult {
        let player1: Pocker,
            player2: Pocker,
            player3: Pocker,
            left: Pocker;
        player1 = new Pocker(this.getCards(17));
        player2 = new Pocker(this.getCards(17));
        player3 = new Pocker(this.getCards(17));
        left = new Pocker(this.cards);
        return {
            player1,
            player2,
            player3,
            left
        };
    }
    /**
     * 发牌的辅助函数,代表某玩家的摸牌操作
     * 返回值是一个17张牌的数组( 斗地主 )
     * @param n 要摸多少张牌
     */
    getCards(n: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card);
        }
        return cards;
    }
}