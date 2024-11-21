let score = '33'

let newScore= (Number(score))

console.log(typeof newScore);  //--number

let score2 = '33ee'

let newScore2 = (Number(score2))

console.log(typeof newScore2);  //--number

console.log(newScore2);   //---NaN


let loggedIn = 1 

let booleanloggedIn = Boolean(loggedIn)

console.log(booleanloggedIn);


// 1 => true ; 0 => false;
// "" => false
// 'SAHIL' => true


let someNum = 8989

let stringNum = (String(someNum))

console.log(stringNum);

console.log(typeof stringNum);



// pre-increment operator

let num = 5;
console.log(++num); // Output: 6
console.log(num);   // Output: 6

// post-increment operator

let number = 5;
console.log(number++); // Output: 5
console.log(number);   // Output: 6