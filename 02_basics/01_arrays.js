// let cow =['black cow', 'red cow', 'yellow cow']
// let goat =['white goat', '20kg goat', 'lamb']

// console.log(goat.push('3434f'))

// console.log(goat);


let myArry = [1,3,4,5,6]
let myArry2 = [7,8,9,10,77]

let myNewArr = myArry.slice(0,4 )  //slice doest not take 
console.log(myNewArr);
console.log('A', myArry);

let myNewArr2 = myArry2.splice(0,3)  //splice can changes the existing array also
console.log(myNewArr2);
console.log('B', myArry2);


// [ 1, 3, 4, 5 ]
// A [ 1, 3, 4, 5, 6 ]
// [ 7, 8, 9 ]
// B [ 10, 77 ]

 
// console.log(myArry.splice(2,4));
// console.log(myArry.pop()); 
// console.log(myArry);



let arry5 = 788
let arry6 = 888
let arry7 = 888
let arry8 = 888
let arry9 = 888

let netKite = Array.of(arry5, arry6, arry6)
console.log(netKite);

let loan = ['ICICIBank']

console.log(Array.from('ICICIBank'));


