/*
Topics Covered

0.use strict
1.Variables (var,let,const)
2.String
3.Convert String to number
4.Convert Number to String
5.Data Types
6.== vs ===
7.else if condition
8.Array
9.Reference type vs primitive
10.Cloning of Array
11.loops (for,while,do-while)
12.Operations on array (shift,unshift,pop,push)
13.Switch statement
14.ternary operator
15.array destructuring
16.for-in loop and for-of loop
17.use const for creating an array
18.Array destructuring
19.Spread Operatorn
20.Objects reference type
21.Diff between dot and bracket notation in object
22.Object destructuring
23.Object inside array  
24.Functions
25.Hoisting
26.Function inside function
27.Arrow functions (const name = () => {})
28.Lexical scope
29.Default Parameters
30.Rest Parameters
31.Parameter Destructuring
32.Callback Function
33.function returning function
34.Important array method (map,filter,forEach,reduce)
35.Sort , find , every , some , fill , splice methods
36.Set Data Structure , Map
37.Optional Chaining (?.)
38.Function inside object
39.call , apply , bind
40.arrow function and this keyword
41.Function that create object (Object.creat())
42.proto,prototype,class , new keyword
43.has own property
44.getPrototypeOf
45.Super keyword
46.getter and setter
47.static methods and properties

// ES6
Let and Const
Arrow functions
Default parameters
for of loop
Spread attributes
Maps
Sets
Static methods
Getters and Setters
*/
"use strict";

// Hello World 
console.log("Hello World");


// ===============================================================================================================================
//Variale Section Start

/*
    We can define variable by 3 types
    (a) var
    (b) let
    (c) const

    var -> 
        1.user can update or re-declare it.
        2.functional scope.
        3.It can be accessed without intialization
        4.hoisting done, with initializing as ‘default’ value
    let -> 
        1.user can update but can't re-declare the varaible using let
        2.block scope.
        3.It cannot be accessed without initialization otherwise it will give ‘referenceError’.
        4.Hoisting is done , but not initialized 
    const -> 
        1.user can't re-declare or update the varaible using const
        2.block scope.
        3.It cannot be accessed without initialization, as it cannot be declared without initialization.
        4.Hoisting is done, but not initialized
*/


// We can't start variable name with digits
// we can use letter (uppercase,lowercase) , underscore , dollar and number in variable name
// We can start variable name with $

// using var

// var 1a = 5; (Invalid)

var _a = "_a";
var a1 = "a1";
var $a = "$a";
var name = "Madhurendra Nath Tiwari"
// var first name = "Madhurendra"; (Invalid)
// var first-Name = "Madhurendra"; (Invalid)
console.log(_a,a1,$a,name);
console.log(N);//accessed before initialization
var N = "b"

// using let
let firstName = "Madhurendra"
console.log(firstName)
// let firstName = "Nath Tiwari" //we can't redeclare
firstName = "Mohit" // we can update
console.log(firstName);
//using const
const pi = 3.14
//pi = 4;//you can't update
//const pi = 22/7;//you can't re-declare
console.log(pi);

//Variale Section End

// ===============================================================================================================================




// ===============================================================================================================================
// String Start
let str = "            Madhurendra Nath Tiwari               ";
let len = str.length;
console.log(str.charAt(0));
console.log(str[0]);
console.log(len);

// trim() 
// toUpperCase()
// toLowerCase()
// slice()

str = str.trim()//remove space from front and back
console.log(str.length);

str = str.toLowerCase();
console.log(str);

str = str.toUpperCase();
console.log(str);

str = str.slice(2);//remove first 2 character
console.log(str);

str = str.slice(0,2)//remove charact from index 2 to length of string
console.log(str);

// convert number to string
let num = 22;
console.log(typeof num);
num = num + " ";
console.log(typeof num);


// convert string to number
let numstr = "123"
console.log(typeof numstr);
numstr = +numstr;
console.log(typeof numstr);

// adding two string number 
let string1 = "17";
let string2 = "10";
let newString = (+string1) + (+string2);
console.log(typeof newString , newString);


// template string 
// you can use both single and double quotes inside a string if you are using template literals
//Template literals allows multiline strings
let text =
`The quick
brown fox
jumps over
the lazy dog`;

console.log(text);

let age1 = 22;
let firstName1 = "Madhurendra"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age1}`
console.log(aboutMe);


//String End
// ===============================================================================================================================




// ===============================================================================================================================
//Data type
// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans true false
// undefined
// null object
// BigInt
// Symbol

let str1 = "I am string"
let age = 21
let isIntern = true;
let undef = null;
let bigInt = 219873190813109719393710937937190193219873190813109719393710937937190193219873190813109719393710937937190193n;
const hugeBin = BigInt("0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")
console.log(typeof str1,typeof age,typeof isIntern,typeof undef,typeof bigInt,typeof hugeBin);

// ===============================================================================================================================




// ===============================================================================================================================
// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 7;
let num2 = "7";

// == vs === 
// 1.duble equals is loose equality and triple equals to is strict equality.
//2. === compares if the values and the types are the same.
// 3. == compares if the values are the same, but it also does type conversions in the comparison. Those type conversions make == slower than ===.
console.log("num1==num2 : " , num1==num2 ,"\n","num1===num2 : " , num1===num2);

// ===============================================================================================================================


// ===============================================================================================================================
// if else condition
let age2 = 18;
if(age2>18){
    console.log("Adult");
}
else if(age2==18){
    console.log("You are 18");
}
else{
    console.log("Under 18");
}

// nested if

let winningNumber = 19;
let userGuess = 19;

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}


// ternaly operator

let isAdult = age>=18 ? true : false;
console.log(isAdult);


// switch statement
let day = 0;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

// if else condition end
// ===============================================================================================================================


// ===============================================================================================================================
// loops start

// while loop 

let i = 0; // 1 2 3 4

while(i<=9){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);

// let j = 0;

// do {
//     console.log(j);
//     j++;
// } while (j<0);

for(let i = 0;i<=9;i++){
    console.log(i);
}

// loop end
// ===============================================================================================================================


// ===============================================================================================================================
// intro to arrays  start
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);//object
console.log(typeof obj);//object
console.log(Array.isArray(fruits));//true
console.log(Array.isArray(obj));//array

// operations on array
// pop
// shift
// unshift
// push

let numberArr = [1,2,3,4,5]
console.log(numberArr);
numberArr.push(6)//inserting element into last of the array
console.log(numberArr);
numberArr.pop();//removing element from last of the array
console.log(numberArr);
numberArr.shift();//removing element from starting of the array
console.log(numberArr);
numberArr.unshift(12);//inserting element from front in an array
console.log(numberArr);

//array end
// ===============================================================================================================================


// ===============================================================================================================================
// primitve vs reference data types
let num1_ = 6;
let num2_ = num1;
console.log("value is num1 is", num1_);
console.log("value is num2 is", num2_);
num1_++;
console.log("after incrementing num1")
console.log("value is num1 is", num1_);
console.log("value is num2 is", num2_);

// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;//now array2 is pointing to array1
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
// ===============================================================================================================================


// ===============================================================================================================================
// how to clone array 

// how to concatenate two arrays

let array11 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array22 = [...array11, ...oneMoreArray];

array11.push("item3");
array11.push("item4");

console.log(array11===array22);
console.log(array11)
console.log(array22)

// cloning of array end

// ===============================================================================================================================


// ===============================================================================================================================
// for-of loop
let fruitss = ["Apple" , "Mango" , "Orange"];
for (const iterator of fruitss) {
    console.log(iterator);
}
// for-in loop
for (const key in fruitss) {
    const element = fruitss[key];
    console.log(element);
}

// ===============================================================================================================================

// ===============================================================================================================================
// use const for creating array

const fruitsss = ["apple", "mango"]; // 0x11
fruits.push("banana");//we are not chaning address of fruitsss
//fruitsss = ["new" , "apple" , "mango"]//now we are changing it
console.log(fruitsss);
// ===============================================================================================================================

// ===============================================================================================================================
// array destructuring
const myar = ["Madhurendra" , "Nath" , "Tiwari"];
const [a,...b] = myar;
console.log(a,b);
// ===============================================================================================================================


// ===============================================================================================================================
const person = {
    "name": "Madhurendra",
    "age": 22,
    "person hobbies": ["Code", "Sleeping", "Listening Music"]
}
person.sex = "Male"
console.table(person["person hobbies"]);

// ===============================================================================================================================


// ===============================================================================================================================
// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const Obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const Obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const Obj = {};

Obj[key1] = value1;
Obj[key2] = value2;
console.table(Obj);
// ===============================================================================================================================


// ===============================================================================================================================
// Spread Operator Start
const numar = [...[123,21,21,11,1,2,1,3]];
console.log(numar)
const strar = [..."abcdefghijklmnop"];
console.log(strar)
// Spread Operator End
// ===============================================================================================================================
// ===============================================================================================================================
// object destructuring Start
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps , typeof restProps);
  // object destructuring End
// ===============================================================================================================================

// ===============================================================================================================================
// objects inside array 
// very useful in real world applications

// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.table(user);
// }

// ===============================================================================================================================

// ===============================================================================================================================
// functions
// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it
function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

singHappyBirthday();
console.log(sumThreeNumbers(1,2,3));


//greet();//greet is not a function


//function expressions
var greet = () => {
    console.log("Hello");
}

const sayHi = function(name){
    console.log("Hi" , name);
}
sayHi("Madhurendra")


// ===============================================================================================================================

// ===============================================================================================================================
// function inside function
function app(){
    const myFunc = function(){
        console.log("Hello , I am from myFunc");
    }
    const addTwo = (a,b) => {
        return a+b;
    }

    const mul = (a,b) => a*b;

    myFunc();
    console.log(addTwo(1,2));
    console.log(mul(10,20));
}

app();

// ===============================================================================================================================


// ===============================================================================================================================
// Arrow function
const arrowfn = () => {
    console.log("I am arrow fn");
}
const arrowfn1 = () => console.log("I am arrow fn1");
arrowfn()
arrowfn1()
// ===============================================================================================================================


// ===============================================================================================================================
// lexical scope 
// JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function.
// lexical enviornment means where function is define

const myVar = "value1";

function myApp(){
    

    function myFunc(){
        const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();
// ===============================================================================================================================


// ===============================================================================================================================
//Default Parameters

function sum(a = 0,b = 0,c = 0){
    return a+b+c;
}
console.log(sum(1,2));
// ===============================================================================================================================


// ===============================================================================================================================
//Rest parameters
function give(a,b,...c){
    console.log(a,b,c);
}
give(1,2,3,4,5,6,7,8,9,10,"Madhurendra","Nath","Tiwari");


// ===============================================================================================================================

// ===============================================================================================================================
//Parameter Destructuring
const Person = {
    firstName : "Madhurendra",
    lastName : "Tiwari",
    age : 22,
    sex : "Male"
}

Person.middleName = "Nath"

const getDetails = ({firstName , lastName , age , sex , middleName}) => {
    console.log(firstName,lastName,age,sex,middleName);
}
getDetails(Person)

// ===============================================================================================================================


// ===============================================================================================================================
//callback function
function myFunc22(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc11(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}
myFunc11(myFunc22);
// ===============================================================================================================================


// ===============================================================================================================================
//function returning function
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());
// ===============================================================================================================================


// ===============================================================================================================================
//array methods
//filter , map , reduce , forEach

const numberline = [1,2,3,4,5,6,7,8,9,10];
//map
const new_numberline = numberline.map((numbers) => {
    return numbers&1 ? `${numbers} : ODD` : `${numbers} : EVEN`;
})

console.log(new_numberline);

//filter
const oddArr = numberline.filter(numbers => numbers&1);
console.log(oddArr);
const evenArr = numberline.filter(numbers => !(numbers&1));
console.log(evenArr);

//reduce
//aim - calculate sum  of array
const sum1 = numberline.reduce((accumulator , currentValue) => {
    return accumulator + currentValue;
})
console.log(sum1);

const userCart = [
    {productId : 1 , productPrice : 1000 , productCount:3},
    {productId : 2 , productPrice : 900 , productCount:2},
    {productId : 3 , productPrice : 1200 , productCount:5},
    {productId : 4 , productPrice : 11000 , productCount:1}
]

const totalPriceOfCart = userCart.reduce((accumulator, currentValue) => {
    // console.log(accumulator);
    // console.log(currentValue);
    return (accumulator + currentValue.productPrice * currentValue.productCount)
} , 0)

console.log(totalPriceOfCart);

//forEach
const multiply = (number,index) => console.log(`${number} * ${index} = ${number*index}`);
numberline.forEach(multiply);

// ===============================================================================================================================


// ===============================================================================================================================
//sort , find
const sortArr = [5,4,6,7,3,2,1]

//ascending order
sortArr.sort( (a,b) => a - b)
console.log(sortArr);

//descending order
sortArr.sort( (a,b) => b - a)
console.log(sortArr);

const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
userNames.sort();
console.log(userNames);


// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = [...products.sort((a,b)=>{
    return a.price-b.price
})];


// console.log(lowToHigh===products);//false now
console.log(lowToHigh);

const highToLow = [...products.sort((a,b)=>{
    return b.price-a.price;
})];

// console.log(highToLow===products);//false now
console.log(highToLow);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]


users.sort((a,b)=>{
    if(a.age > b.age){
        return 1;
    }else{
        return -1;
    }
});

console.log(users);

//find
console.log(products.find((product)=> product.productId===1));

//every
const even = [2,4,6,8,10]
console.log(even.every(element => !(element&1)));

//some
console.log(even.some(element => element&1));
console.log(products.some(product => product.price<1000));


//fill
//fill  function two types
//(i) we can only provide value in fill like below
const fillArr = new Array(10).fill(-1);
console.log(fillArr);

//(ii) we can provide value and starting index and ending index to fill like below
//fill(value , starting_index (including) , ending_index (not including));
const fillArr1 = [1,2,34,5]
fillArr1.fill(0,2,3);
console.log(fillArr1);


//splice method
// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3' , 'item4'];

// delete from starting index (including) to ending index (not including)
const deletedItem = myArray.splice(0, 2);
console.log("delted item", deletedItem , "myArray" , myArray);

// insert at 0th position
myArray.splice(0, 0,'inserted item0');
console.log("myArray" , myArray);

//insert and delete
//delete item from index 1 till count 1
//insert element from index 1
myArray.splice(1,1,"inserted item1" , "inserted item2")
console.log(myArray);


const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

const new_items = items.slice(1);
console.log(new_items);

// ===============================================================================================================================


// ===============================================================================================================================
//Set
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)


let st = new Set();
st.add(1);
st.add(2);
st.add(1);
st.add(3);
st.add(5);
st.add(5);
st.add(4);
st.add(1);
st.add(6);
st.add(6);
st.add(7);
st.add(1);
console.log(st);

if(st.has(7)){
    console.log(`7 is present`);
}else{
    console.log(`Not Present`);
}

console.log(st.size);



// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
let person1 = {
    firstName : "harshit",
    age: 7,
    1:"one"
}
console.log(person1.firstName);
console.log(person1["firstName"]);
console.log(person1[1]);

for(let key in person1){
    console.log(typeof key);
}

person1 = new Map();
person1.set('firstName', 'Harshit');
person1.set('age', 7);
person1.set(1,'one');
person1.set([1,2,3],'onetwothree');
person1.set({1: 'one'},'onetwothreefour');
console.log(person1);
console.log(person1.get(1));
for(let key of person1.keys()){
    console.log(key, typeof key);
}
for(let [key, value] of person1){
    // console.log(Array.isArray(key));
    console.log(key, value)
}
console.log("Start");
for (let [key] of person1) {
    console.log(person1.get(key));
}
// ===============================================================================================================================

// ===============================================================================================================================
//optional chaining
//  Cannot read properties of undefined (reading 'name')
const user1 = {
    firstName : "Madhurendra",
    address : {
        houseNumber : "1234",
        state : "UP",
        district : "SKN",
        pinCode : 272164
    }
}

console.log(user1?.firstName1);
console.log(user1?.address?.street);

function Info() {
    console.log(`my name is ${user1.firstName}`);
}
Info();
// ===============================================================================================================================


// ===============================================================================================================================
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person2 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person3 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person4 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person2.about();//person name is harsh and age is 8
person3.about();//person name is mohit and age is 18
person4.about();//person name is nitish and age is 17

//===============================================================================================================================
// use strict mode
console.log(window);
"use strict";
function myfunc(){
    console.log(this);
}
myfunc();
//===============================================================================================================================


//===============================================================================================================================
// call , about and bind

//call -  we use call when we have to borrow any function of object to another object

const firstObj = {
    firstName : "Madhurendra",
    age : 21 , 
    about : function(hobbies){//we should not use arrow function here becuase it gives error
        console.log(`my name is ${this.firstName} and age is ${this.age} and my hobbies is ${hobbies}`);
    }
}

//secondObj want to call about() function of firstObj so we have to use call

const secondObj = {
    firstName : "Vivek",
    age : 22
}

// secondObj.about();//secondObj.about() is not a function.
firstObj.about.call(secondObj , "Reading");
firstObj.about.apply(secondObj , ["Reading"]);


// user1.about();
//bind return function
const newfirstObj = firstObj.about.bind(firstObj);
newfirstObj("Play Guitar");


//===============================================================================================================================


//===============================================================================================================================
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    user.sing = function(){
        return "la la la la";
    }
    return user;
}

const user11 = createUser('madhurnedra', 'nath tiwari', 'madhurnedra@gmail.com', 19, "my address");
console.log(user11);
const is18 = user11.is18();
const about = user11.about();
console.log(about);
//===============================================================================================================================


//===============================================================================================================================
    const methods = {
        about : function(){
            return `${this.firstName} , ${this.lastName}`
        },
        is18 : function(){
            return `${this.age>=18 ? "Adult" : "Below 18"}`
        },
        sing : function(){
            return "la la la";
        }
    }
    function createUserNew(firstName, lastName, email, age, address){

        // const user = {};
        const user = Object.create(methods);//prototype set
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        // user.about = methods.about;
        // user.is18 =  methods.is18;
        // user.sing =  methods.sing;
        return user;
    }
    const usernew = createUserNew("Madhurendra" , "Nath Tiwari" , "madhu123@gmail.com",21,"my address");
    console.log(usernew);
    console.log(usernew.about() , usernew.is18());

//===============================================================================================================================


const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1)//we are setting proto of obj2 to obj1

// const obj2 = {
//     key3 : "value3"
// }

obj2.key3 = "value3"

// console.log(obj1.key1);
// console.log(obj2.key3);
// console.log(obj2.key1);//it will give you undefined result

console.log(obj1.key1);
console.log(obj2.key3);
console.log(obj2.key1);//it will not give you undefined result

console.log(obj2.__proto__);



// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// [[prototype]]

// constructor function 

//when we create functon we got free space prototype where we can add anything
function CreateUserAgain(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUserAgain.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUserAgain.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUserAgain.prototype.sing = function (){
    return "la la la la ";
}


const user111 = new CreateUserAgain('madhurendra', 'tiwari', 'madhurendra@gmail.com', 18, "my address");
const user21 = new CreateUserAgain('harsh', 'tiwari', 'madhurendra@gmail.com',19, "my address");
const user31 = new CreateUserAgain('mohit', 'tiwari', 'madhurendra@gmail.com', 17, "my address");
console.log(user111);


//==============================================================================
// hasown property

function createProd(productId , productName , productCount , productPrice){
    this.productId = productId;
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
}

const prod1 = new createProd(1 , "Product1" , 2 , 2000);
const prod2 = new createProd(2 , "Product2" , 1 , 12000);

createProd.__proto__.totalPriceOfCart = function(){
    return this.productCount * this.productPrice;
}

console.log(prod1);
console.log(prod2);

for (const key in prod1) {
    if (Object.hasOwnProperty.call(prod1, key)) {
        console.log(key);//it will not print totalPriceOfCart function because it property of their proto not object
    }
}


//=======================================================================
//get prototype of

const numberarr = [1,2,3,4,5];
console.log(numberarr.__proto__);
console.log(Object.getPrototypeOf(numberarr));



//=======================================================================

// ======================================================================
//class keyword
class CreateStudent{
    constructor(firstName , middleName , lastName , age , rollNo , branch , sec , year){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.age = age;
        this.rollNo = rollNo;
        this.branch = branch;
        this.sec = sec;
        this.year = year;
    }
    student_info(){
        console.log(`
            Name : ${this.firstName + " " + this.middleName + " " + this.lastName}
            RollNo : ${this.rollNo}
            Branch : ${this.branch}
            Sec : ${this.sec}
            Year : ${this.year}
        `);
    }


}

const student1 = new CreateStudent("Madhurendra", "Nath" , "Tiwari", 21,
54,"IT" , "G" , "4th Year");

student1.student_info();


class Animal{
    constructor(name , age){
        this.name = name;
        this.age = age;
    } 
    run(){
        return `${this.name} is running`
    }  
}

const animal1 = new Animal("Jocky" , 2)
console.log(animal1.run());
// ======================================================================

// ======================================================================
//Super Keywor
class Dog extends Animal {
    constructor(name, age , color){
        super(name, age);
        this.color = color;
    }
    bark(){
        return `${this.name} is barking`
    }
    getColor(){
        return `the color of ${this.name} is ${this.color}`
    }
}
const tommy = new Dog("tommy",3 , "black and white");
console.log(tommy.run());
console.log(tommy.bark());
console.log(tommy.getColor());

// ======================================================================

// ======================================================================
// getter and setter
class Person1{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName , lastName] = this.fullName.split(" ");
        this.firstName = firstName
        this.lastName = lastName;
    }

}
const p1 = new Person1("Madhurendra" , "Nath Tiwari" , 22);
console.log(p1.fullName);
p1.fullName = "Madhurendra Tiwari";
console.log(p1.fullName);
// ======================================================================



