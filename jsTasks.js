let hello = "«Я JavaScript!»";
console.log(hello);
//

let admin;
let name = "John";
admin = name;
console.log(admin);

//

let userName = prompt("Enter your name.", "noname");
console.log(`Тебя зовут ${userName}!`);

//

let a = 1;
let b = 2;

console.log(Number(a + b));

//

let enterAnswer = prompt("Какое «официальное» название JavaScript?");
if (enterAnswer == "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}

//

let result;
a + b < 4 ? (result = "Мало") : (result = "Много");

//

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

//

let age = 95;
if (age >= 14 && age <= 90) {
  console.log(`${age} + 'Checked!'`);
} else {
  console.log(`${age} + 'Not good!'`);
}

//

let age = 13;
if (!(age >= 14 && age <= 90)) {
  console.log(`${age} + 'Checked!'`);
} else {
  console.log(`${age} + 'Not good!'`);
}

//

let enterName = prompt("Введите ваше имя");
if (enterName == "Админ") {
  console.log("Введите пароль");
  let enterPassword = prompt("password?");
  if (enterPassword == "Я Главный") {
    console.log("Здравствуйте!");
  } else if (enterPassword != "Админ" && enterPassword != null) {
    console.log("Неверный пароль!");
  } else {
    console.log("Отменено");
  }
} else if (enterName != "Админ" && enterName != null) {
  console.log("Я вас не знаю");
} else {
  console.log("Отменено");
}

//

const func1 = () => {
  for (i = 2; i < 11; i++) {
    if (!(i % 2)) {
      console.log(i);
    }
  }
};
func1();

//

const func4 = () => {
  const zxc = [];
  for (i = 2; i < 11; i++) {
    if (!(i % 2)) {
      zxc.push(i);
      console.log(zxc);
    }
  }
  return zxc;
};
func4();

//

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

//

const put2 = (num) => {
  if (num > 100) {
    console.log("done");
  } else put2(prompt("enter number > 100"));
};

put2(prompt("enter number > 100"));

//

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

//

const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}

//

const checkAge = (age) => {
  age > 18 ? true : confirm("Родители разрешили?");
};

//

const calcMin = (a, b) => (a > b ? b : a);
console.log(calcMin(2, 5));

//

const pow = (a, b) => Math.pow(a, b);
console.log(pow(3, 2));

/////CHAPTER 4

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

//

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

//

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

//

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};
console.log(multiplyNumeric(menu));
console.log(menu);

//

let calculator = {
  read() {
    (num1 = 3), (num2 = 3);
  },
  sum() {
    return num1 + num2;
  },
  mul() {
    return num1 * num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep();

///////CHAPTER 5

let first = +prompt("Введите первое число", "");
let second = +prompt("Введите второе число", "");

console.log(first + second);

//

console.log(Math.round(6.35 * 10) / 10);

//

const readNumber = () => {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));
  if (num === null || num === "") return null;
  return +num;
};
console.log(`Число: ${readNumber()}`);

//

const random = (min, max) => min + Math.random() * (max - min);

//

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

console.log(randomInteger(1, 5));

//

const ucFirst = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst("игорь"));

//

const checkSpam = (str) => {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

//

const truncate = (str, maxlength) =>
  str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

//

const extractCurrencyValue = (str) => +str.slice(1);

console.log(extractCurrencyValue("$120"));

//

let musicStyles = ["Джаз", "Блюз"];
musicStyles.push("Рок-н-ролл");
musicStyles[Math.floor((musicStyles.length - 1) / 2)] = "Классика";
console.log(musicStyles.shift());
musicStyles.unshift("Рэп", "Регги");
console.log(musicStyles);

//

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2]();
console.log(arr.length);

//

const sumInput = () => {
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumInput());

//

const getMaxSubSum = (arr) => {
  let maximumSum = 0;
  let partSum = 0;

  for (let item of arr) {
    partSum += item;
    maximumSum = Math.max(maximumSum, partSum);
    if (partSum < 0) partSum = 0;
  }

  return maximumSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

//

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => arr.filter((item) => a <= item && item <= b);

console.log(arr, filterRange(arr, 1, 4));

//

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

filterRangeInPlace(arr, 1, 4);
console.log(arr);

//

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

//

const copySorted = (arr) => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(copySorted(arr));
console.log(arr);

//

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);

//

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names);

//

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

//

const sortByAge = (arr) => arr.sort((a, b) => (a.age > b.age ? 1 : -1));

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

//

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

//

const getAverageAge = (users) =>
  users.reduce((prev, user) => prev + user.age, 0) / users.length;

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));

//

const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));

//

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (array) => {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
};

console.log(groupById(users));

//

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const unique = (arr) => Array.from(new Set(arr));

console.log(unique(values));

//

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
};

console.log(aclean(arr));

//

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

//

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
console.log("Read message 0: " + readMessages.has(messages[0]));

//

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));

//

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) =>
  Object.values(salaries).reduce((a, b) => a + b, 0);

console.log(sumSalaries(salaries));

//

let user = {
  name: "John",
  age: 30,
};

const count = (obj) => Object.keys(obj).length;

console.log(count(user));

//

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

//

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};

console.log(topSalary(salaries));

//

let d = new Date(2012, 1, 20, 3, 12);
// alert( d );
console.log(d);

//

const getWeekDay = (date) => {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
};

let date = new Date(2014, 0, 3);
console.log(getWeekDay(date));

//

let date = new Date(2012, 0, 3);
const getLocalDay = (date) => {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
};

console.log(getLocalDay(date));

//

const getDateAgo = (date, days) => {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));

//

const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));

//

const getSecondsToday = () => {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

console.log(getSecondsToday());

//

const getSecondsToTomorrow = () => {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
};

console.log(getSecondsToTomorrow());

//

const formatDate = (date) => {
  let diff = new Date() - date;

  if (diff < 1000) return "прямо сейчас";

  let sec = Math.floor(diff / 1000);

  if (sec < 60) return sec + " сек. назад";

  let min = Math.floor(diff / 60000);
  if (min < 60) return min + " мин. назад";

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

//

let user = {
  name: "Василий Иванович",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2);

//

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
