Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
function createPocker() {
    const pocker = {
        card: []
    };
    const vals = Object.values(enums_1.Nums);
    const colors = Object.values(enums_1.Color);
    for (const n of vals) {
        for (const c of colors) {
            pocker.card.push({
                color: c,
                mark: n,
                getString() {
                    return this.color + this.mark;
                }
            });
        }
    }
    let joker = {
        type: "small",
        getString() {
            return "jo";
        }
    };
    pocker.card.push(joker);
    joker = {
        type: "big",
        getString() {
            return "JO";
        }
    };
    pocker.card.push(joker);
    return pocker;
}
exports.createPocker = createPocker;
function printPocker(pocker) {
    let str = "";
    pocker.card.forEach((item, i) => {
        if (i !== 0 && i % 4 === 0) {
            str += "\n";
        }
        str = str + item.getString() + " ";
    });
    console.log(str);
}
exports.printPocker = printPocker;
