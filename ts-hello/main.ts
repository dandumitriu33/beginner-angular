function doSomething() {
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally (var i is not code block but function scoped): ' + i);
    console.log('Finally (let i will be block scoped scoped like C# - better way): ');
}
doSomething();


// function log(message){
//     console.log(message);
// }

// var message = "Hello world!";

// log(message);