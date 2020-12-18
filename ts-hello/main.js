var count = 5;
// count = 'a'; // compilation error
var b;
b = 1;
b = true;
var c;
// c = 'gg'; // compilation error
var d;
var f;
var g;
var h;
var m = [1, 2, 3];
var n = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
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
