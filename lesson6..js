function sumTo(a) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

function sumTo(a) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

function sumTo(a) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100));

//

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

//

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3));

//

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

console.log(printList(list));

//

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log(printReverseList(list));

//

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));

//

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10])));

//

let users = [
  { name: "Lee", age: 20, surname: "Johnson" },
  { name: "Kate", age: 18, surname: "Peterson" },
  { name: "Ann", age: 59, surname: "Hathaway" },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name));

//

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();

console.log(army[0]());

//

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = (s) => (count = value);
  counter.decrease = () => count--;
  return counter;
}
console.log(makeCounter());

//

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2));

//Используя setInterval.
// Используя рекурсивный setTimeout

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
console.log(printNumbers(5, 10));

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

console.log(printNumbers(5, 10));

//

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

//

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(alert, 1000);
console.log(f1000("test"));

//

function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}
console.log(setTimeout(() => f(3), 100));

//



function f(a) {
    console.log(a)
  }
  
let f1000 = throttle(f, 1000)

function throttle(func, ms) {
    

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { 
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments);
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }

  console.log(f1000(1));

  //

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
        console.log(`${this.name} logged in`);
    },
  
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
  
  };
  
  console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user)));

  //

  

