"use strict";
const str = "abyabyazyzyzyz";
let obj = {};
for (let i = 0; i < str.length; i++) {
  const letter = str[i];
  if (!(letter in obj)) {
    obj[letter] = 1;
  } else {
    obj[letter] += 1;
  }
}
let letter = "",
  val = 0;
for (let key in obj) {
  if (obj[key] > val) {
    letter = key;
    val = obj[key];
  }
}
console.log(letter === "" ? "Значения отсутствуют" : `${letter}:${val}`);
