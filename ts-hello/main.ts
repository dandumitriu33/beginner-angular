let count = 5;
// count = 'a'; // compilation error
let b;
b = 1;
b = true;
let c: number;
// c = 'gg'; // compilation error
let d: number;
let f: boolean;
let g: string;
let h: any;
let m: number[] = [1, 2, 3];
let n: any[] = [1, true, 'a', false];

enum Color{ Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = Color.Red;




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