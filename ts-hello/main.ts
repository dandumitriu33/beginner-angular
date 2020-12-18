// arrow functions
// js
let log = function(message) {
    console.log(message);
}

// ts
let doLog = (message) => {
    console.log(message);
}

// ts if only one line
let doLog2 = (message) => console.log(message);
// event the () surrounding message can be taken out but then = less readable
// no params is just ()

// -----------------------

// // type assertion to get intellisense - doesn't change the type at runtime
// let message = "abc";
// let endsWithC = message.endsWith('c');

// let message2;
// message2 = 'abc';
// let endsWithC2 = (<string>message).endsWith('c');
// let endsWithC2alternative = (message as string).endsWith('c');


// let count = 5;
// // count = 'a'; // compilation error
// let b;
// b = 1;
// b = true;
// let c: number;
// // c = 'gg'; // compilation error
// let d: number;
// let f: boolean;
// let g: string;
// let h: any;
// let m: number[] = [1, 2, 3];
// let n: any[] = [1, true, 'a', false];

// enum Color{ Red = 0, Green = 1, Blue = 2, Purple = 3 };
// let backgroundColor = Color.Red;




// function doSomething() {
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally (var i is not code block but function scoped): ' + i);
//     console.log('Finally (let i will be block scoped scoped like C# - better way): ');
// }
// doSomething();


// function log(message){
//     console.log(message);
// }

// var message = "Hello world!";

// log(message);