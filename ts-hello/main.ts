// Access modifiers - public(default), private, protected

class Point {
    // private x: number;
    // private y: number;
    // private weight: number;

    // constructor(x?: number, y?: number){
    //     this.x = x;
    //     this.y = y;
    //     this.weight = 5;
    // }

    // a shorter way to write the constructor an be
    constructor(private _x?: number, private _y?: number, private _weight: number = 5){};

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(another: Point){
        // ...
    }

    getX() {
        return this._x;
    };

    // property
    get x() {
        return this._x;
    };

    setX(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._x = value;
    }

    // property
    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._x = value;
    }
} 

let point = new Point(1, 2); // shorter declaration - the compiler can infer the type
//point.x = 10;
//point.y = 20;
// point.weight = 30;  // compilation error
point.draw();
let x = point.getX();
point.setX(10);
// ---- props ---
let gg = point.x; // from get X
point.x = 10; // from set X

// ----------

// // cohesion - properties and methods inside the same unit (class)

// class Point {
//     x: number;
//     y: number;

//     // typescript can only have 1 constructor
//     // so if you want to have a parameterless ctor - use optional params
//     constructor(x?: number, y?: number){
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }

//     getDistance(another: Point){
//         // ...
//     }
// } 

// // now just like in C# we access fields and methods + intellisense
// // let point: Point = new Point(); // complete line declaration
// let point = new Point(1, 2); // shorter declaration - the compiler can infer the type
// point.x = 10;
// point.y = 20;
// point.draw();


// -------------

// let drawPoint = (x, y) => {
//     // ...
// }
// // instead of passing x, y, we can pass a point object 
// // to use especially when too many parameters are being passed

// let drawPoint2 = (point) => {
//     // ... draw with x and y
// }

// drawPoint2({
//     x: 1,
//     y: 1
// });
// // problem - no compile error/indicator
// drawPoint2({
//     name: 'Mosh'
// })

// // solution - inline annotation
// let drawPoint3 = (point: { x: number, y: number }) => {
//     // ... draw with x and y
// }

// // better solution - interfaces
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint4 = (point: Point) => {
//     // ... draw with x and y
// }

// ----------------------

// // arrow functions
// // js
// let log = function(message) {
//     console.log(message);
// }

// // ts
// let doLog = (message) => {
//     console.log(message);
// }

// // ts if only one line
// let doLog2 = (message) => console.log(message);
// // event the () surrounding message can be taken out but then = less readable
// // no params is just ()

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