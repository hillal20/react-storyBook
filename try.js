const x = "hello ";

const fn = () => {
  console.log("x ==>", x);
  const y = "string";

  return () => y;
};

const result = fn();
// const res = result();
console.log(result());

// const result = fn();
// console.log(result);

// remove adjacent duplicate characters from the string
//  Eg: gddksforgddk -> gksforgk, acaaabbbacdddd -> acac
// let str = "acaaabbbacddddff";
// let final = "";
// const obj = {};
// for (let i = 0; i < str.length; i++) {
//   let temp = str[i];

//   for (let j = i; j < str.length; j++) {
//     if (str[j] === str[j + 1]) {
//       temp += str[j];
//     } else {
//       i = j;
//       break;
//     }
//   }
//   if (temp.length > 1) obj[temp] = "";
// }
// Object.keys(obj).map((e) => {
//   const reg = new RegExp(e, "g");
//   console.log("reg ==> ", reg);
//   str = str.replace(reg, "");
// });
// console.log(str);
