//Решение O(N+K)= O(N)
type Dict = { [key: string]: number };

const str: string = "abyabyazyzyzyz";
let obj: Dict = {};

for (let i: number = 0; i < str.length; i++) {
  const letter: string = str[i];
  if (!(letter in obj)) {
    obj[letter] = 1;
  } else {
    obj[letter] += 1;
  }
}

let letter: string = "",
  val: number = 0;

for (let key in obj) {
  if (obj[key] > val) {
    letter = key;
    val = obj[key];
  }
}
console.log(letter === "", "Значения отсутствуют.", `${letter}:${val}`);
