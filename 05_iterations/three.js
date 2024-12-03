const myObj ={
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    safari: 'Apple'
}

for (const key in myObj) {
//  console.log(`${key} shortcut is for ${myObj[key]}`);   
}


// Output
// js shortcut is javaScript
// cpp shortcut is C++
// rb shortcut is ruby
// safari shortcut is Apple

const programming = ['C++' , 'Java' , 'JavaScript' , 'Paython']

for (const key in programming) {
    console.log(programming[key]);
    
}