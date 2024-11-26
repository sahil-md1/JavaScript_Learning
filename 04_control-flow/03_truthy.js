const emailLogin = 'mr.mdsahil7@g.com'


if (emailLogin){
    console.log(`User is available for login`);
    
} else {
    console.log(`User is not available for login`);

}

// falsy value 

false, 0, -0, BigInt, 0n, '', null, undefined, NaN

// Truthy value

// -- in string value will be truthy

// '0', "false", " " , [], {} , function

const obj={}

if (Object.keys(obj).length === 0) {
console.log('Array is empty');

}