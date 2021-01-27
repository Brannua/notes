Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
function createPocker() {
    const pocker = [];
    const vals = Object.values(enums_1.Nums);
    const colors = Object.values(enums_1.Color);
    for (const n of vals) {
        for (const c of colors) {
            pocker.push({
                color: c,
                mark: n
            });
        }
    }
    return pocker;
}
exports.createPocker = createPocker;
function printPocker(pocker) {
    let str = "";
    pocker.forEach((item, i) => {
        if (i !== 0 && i % 4 === 0) {
            str += "\n";
        }
        str = str + item.color + item.mark + " ";
    });
    console.log(str);
}
exports.printPocker = printPocker;
