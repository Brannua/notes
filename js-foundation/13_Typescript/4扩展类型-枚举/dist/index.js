var Gender;
(function (Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
// let gender: Gender;
// gender = Gender.male;
// gender = Gender.female;
// // function searchUser(g:Gender){
// //     // ...
// // }
// function printGenders() {
//     const vals = Object.values(Gender);
//     vals.forEach(v => console.log(v));
// }
// printGenders();
// ---------------------------------------
var Level;
(function (Level) {
    Level[Level["level1"] = 0] = "level1";
    Level[Level["level2"] = 1] = "level2";
    Level[Level["level3"] = 2] = "level3";
})(Level || (Level = {}));
// function demo() {
//     const vals = Object.values(Level);
//     vals.forEach(v => console.log(v));
// }
// demo();
console.log(Level.level1);
console.log(Level.level2);
console.log(Level.level3);
