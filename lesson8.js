// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
// pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table),
// а bed.glasses – значение 1 (найденное в head)

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);

//

function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

console.log(user2.name);

//

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

console.log(f.defer(1000));

//

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

console.log(f.defer(1000)(1, 2));

//

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary);

//


