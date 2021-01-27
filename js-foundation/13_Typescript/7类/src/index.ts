import { Pocker } from "./pocker";

const pocker = new Pocker();
/**
 * 洗牌
 */
console.log("=================开始洗牌=================");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
pocker.shuffle();
console.log("=================洗牌完成=================");
/**
 * 打印
 */
console.log("=================输出洗牌结果=================");
pocker.print();
console.log("=================完毕！=================");




console.log("=================开始发牌=================");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
const res = pocker.dealCards();
console.log("=================发牌结束=================");


console.log("=================输出玩家1的牌=================");
res.player1.print();
console.log("=================输出结束=================");


console.log("=================输出玩家2的牌=================");
res.player2.print();
console.log("=================输出结束=================");


console.log("=================输出玩家3的牌=================");
res.player3.print();
console.log("=================输出结束=================");


console.log("=================输出剩余的牌=================");
res.left.print();
console.log("=================输出结束=================");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("                    =                    ");
console.log("=================游戏开始！！！=================");