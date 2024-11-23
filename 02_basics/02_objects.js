// Objecyt

const mySym = Symbol("ww");
let newObj = {
  name: "sahil",
  "name2 88": "sahil2",
  age: 24,
  emaail: "mdsahil77@g.com",
  add: "purnea",
  [mySym]: "ss",
};

// console.log(newObj);
// console.log(newObj['name2 88'] );

const tinderUser = {}; //non-singleTon object
const tinderUser2 = new Object(); //singleton object

tinderUser.name = "sahil";
tinderUser.age = 22;
tinderUser.email = "md@g.com";

// console.log(tinderUser);

const regularUser = {
  name: "NPL",
  event: 88,
  mail: "tcs.com",
  product: {
    name3: "Nest",
    product2: {
      name4: "DSP",
    },
  },
};


// console.log(regularUser.product.product2.name4);

// DSP Output


const obj1 = {a: 5, b: 4}
const obj2 = {c: 9, d:33 , b: 8, a: 1 }
const obj3 = {f:33, p:"2" } 

// value of b will take as what we have assign in the last

const newArr = Object.assign({}, obj1,obj2,  obj3)

console.log(newArr);

// { a: 1, b: 8, c: 9, d: 33, f: 33, p: 2 }   Output 


// JSON format
// {

// }

[
    {},
    {},
    {}
]

