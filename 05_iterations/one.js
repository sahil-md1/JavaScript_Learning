//for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         // console.log('5 is the best number');
//     }
//     // console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    
   for (let  j = 0;  j <= 10; j++) {
    // console.log(`Inner loop ${j} outer loop ${i}`);
   }   
}


for (let p = 0; p < 5; p++) {
   for (let k = 0; k < 5; k++) {
//    console.log(p*k);
    
   }  
}


// break and continue


for (let m = 0; m <= 20; m++) {
  if (m == 5) {
    console.log('5 is the best');
    break
  } 
    console.log(`Value of m is ${m}`);
    
}


// Value of m is 0
// Value of m is 1
// Value of m is 2
// Value of m is 3
// Value of m is 4
// 5 is the best