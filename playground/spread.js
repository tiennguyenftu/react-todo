var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name, age) {
    return 'Hi ' + name + ', you are ' + age;
}

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Tien', ...names];

final.forEach(function (name) {
    console.log(name);
});