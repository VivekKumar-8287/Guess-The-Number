/* while loop 
//Print form 1 - 100 using while loop

let num = 0;
while (num<100){
    num += 1;
    console.log(num);
}
*/

/*
for loop 
Print form 1 - 100 using for loop
 for(let num =0;num<=100;num++){
    console.log(num);
 }*/

/*
//Strings in Javascript (common methods)
let fruit = 'bananas';
let newFruits = 'bana\nas'//new line use \n

console.log(fruit.length)
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('nan',567));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(fruit.split(''));//split every character /by charcter
*/

//Array
let fruit = new Array("banana", "apple", "orange", "pineapple");

// console.log(fruit[2]);

for (let i = 0; i < fruit.length; i++) {
  // console.log(fruit[i]);
}

/*
//Array common methods

console.log(fruit.toString());
console.log(fruit.join('*'));
console.log(fruit.pop()); //remove last item
console.log(fruit.push('blackberries')); //appends
fruit[4] = 'new fruit'; //same as push
fruit.shift() //remove first element from an array
fruit.unshift('kiwi') //add first element to an array

let vegetables = ['asparagus','tomato','broccoli'];
let allGroceries = fruit.concat(vegetables)
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumber = [5,105,2,25,235,1,2,3,45,8,69,158]
console.log(someNumber.sort(function(a,b){return a-b})); // sort number in asc
console.log(someNumber.sort(function(a,b){return b-a})); // sort number in desc

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
emptyArray.push(num);    
}
console.log(emptyArray);
*/

//Object in JavaScript also directries in python

let student = {
  first: "Vivek",
  last: "kumar",
  age: 25,
  height: 170,
  studentInfo: function () {
    return this.first + "\n" + this.last;
  },
};

/*
console.log(student.first);
console.log(student.last);
student.first = 'notVivek'; //change value
console.log(student.first);

student.age++;
console.log(student.age);
console.log(student.studentInfo());

*/
/*
//Conditionals, Control flows (if else)
// 18-35 is my target demographic
//&& AND
// || OR

var age = prompt("what is your age?");

if (age >= 18 && age <= 35) {
  itstatus = "target demo";
  console.log(itstatus);
} else {
  itstatus = "not my audience";
  console.log(itstatus);
}

//Switch statements

switch (6) {
  case 0:
    text = "weekend";
  case 5:
    text = "weekend";
  case 6:
    text = "weekend";

    break;
    default:
        text = 'weekday'
}

console.log(text);
*/


