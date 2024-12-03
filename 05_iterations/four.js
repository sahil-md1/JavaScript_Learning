const coding = [ 'js', 'ruby', 'java', 'paython']

coding.forEach( function (items) {
// console.log(items);
})

coding.forEach( (items, index, arr1)=> {
    // console.log(items, index, arr1);
} )

// output
// js 0 [ 'js', 'ruby', 'java', 'paython' ]
// ruby 1 [ 'js', 'ruby', 'java', 'paython' ]
// java 2 [ 'js', 'ruby', 'java', 'paython' ]
// paython 3 [ 'js', 'ruby', 'java', 'paython' ]

const newCoding = [
    {
        languageName: 'java',
        languageFound: '1995'
    },
    {
        languageName: 'Paython',
        languageFound: '1895'
    },
    {
        languageName: 'javaScript',
        languageFound: '2011'
    },
    {
        languageName: 'C++',
        languageFound: '2024'
    }
]

newCoding.forEach( (key) => {
    console.log(key.languageName);
    
})

//Output
// java
// Paython
// javaScript
// C++