let num1 = 8;
let num2 = 12;

function total(num1, num2) {
  console.log(num1 + num2);
}
// total(2, 8)

function login(username) {
  if (username === undefined) {
    console.log("not able to login");
  } else return `${username} is able to login`;
}

// console.log(login())

function login(username = "hitesh") {
  if (username === undefined) {
    console.log("not able to login");
  } else return `${username} is able to login`;
}

// console.log(login('sahil'))

function cartPrice(num1, num2, ...num3) {
  return num3;
}

// console.log(cartPrice(1, 5, 7, 7, 8, 22));

let user = {
  name: "sahil",
  age: 25,
};

function hanleObj(anyObje) {
  console.log(`${anyObje.name} is able to Loin and his age is ${anyObje.age}`);
}
hanleObj(user);

// sahil is able to Loin and his age is 25

function hanleObj() {
  console.log(`${num1} is able to Loin and his age is ${num2}`);
}

hanleObj();
// 8 is able to Loin and his age is 12
