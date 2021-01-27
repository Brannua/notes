let str = "2019-08-07";
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})/;
/**
 * 匿名捕获组
 */
let a1 = str.replace(reg, "$1年$2月$3日");
console.log(a1);
/**
 * 命名捕获组(增强代码可读性)
 */
let a = str.replace(reg, "$<year>年-$<month>月-$<date>日");
console.log(a);