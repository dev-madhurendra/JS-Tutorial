// Topic Covered
/*
    1.Compilation , global execution context
    2.hoisting
    3.Function execution context
    4.lexical environment
    5.scope chain
    6.closures  
    // DOM Started
    7.Why should we not add js file in head tag ?
    8.Also we should not adddjs file in body tag ?
    9.What is DOM ? (Document Object Model)
    // I have covered dom in dom.js file
    10.getElementById
    11.getElementsByClassName
    12.getElementsByTagName
    13.querySelector
    14.querySelectorAll
    // NodeList vs HTMLCollection
    15.innerText vs innerHTML vs textContent
    15.changing the content of headings
    16.change the styling of elements
    17.getAttribute and setAttribute
    18.Iterate over elements
    19.classList (add,remove,contains.toggle)
    20.Add HTML using JS
    21.createElement , append,remove,prepend
    22.insertAdjecentElement
    23.clone Node
    24.static list vs live list
    25.how to get a dimension of element
    26.intro to events
    27.event object
    28.mouse click , mouse over , mouse move
    29.keypress
    30.event bubbling / event propogation
    31.event capturing
    32.e.preventDefault();
*/

// ============================================================================
//code compilation done due to 
// compiling phase (i) tokenizing / lexing
//                 (ii) parsing -> AST (Abstract Syntax Tree)
//                 (iii) code generation                   
//(i) early error checking
//(ii) DASV (determining appropriate scope for variables)

// code executes inside execution context
//1. global execution context 
//         (i) creation phase
//         (ii) execution phase

// JS is synchronous programming language (sequential programming language)

console.log(this);
console.log(window);
console.log(this===window);
console.log(firstName);
var firstName = "Madhurendra";
myFunction();

//function declaration
function myFunction() {
    console.log(`Hello ${firstName}`);
}

// ============================================================================


// ============================================================================
//hoisting ->  hoisting allows you to use functions and variables before they're declared.

console.log(myFunction1);//this will print undefined
//myFunction1();//this will give error myFunction1() is not a function
//function expression
var myFunction1 = function(){
    console.log(`Hello ${firstName}`);
}
myFunction1();

//let and const are not hoisted.
// console.log(myName);//Uncaught ReferenceError: Cannot access 'myName' before initialization at
let myName = "Madhurendra";
// ============================================================================


// ============================================================================
let foo = "foo";
console.log(foo);
function getFullName(firstName , lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Madhurendra" , "Nath Tiwari")
console.log(personName);
// ============================================================================


// ============================================================================
// lexical environment
// scope chain
const name = "Madhurendra";
function getName(){
    const name = "Name : Madhurendra Nath Tiwari";
    return name;
}
console.log(getName());

const firstNlastName = "Madhurendra Nath Tiwari alia Madhu";
const friendName = "Me myself";
function outerFn() {
    console.log(firstNlastName);
    // const firstNlastName = "Shivam Mishra";
    function innerFn()  {
        const firstNlastName = "Madhuri Mishra";
        console.log(firstNlastName + " " + friendName);
    }
    console.log(firstNlastName);
    innerFn();
}

outerFn();

// ============================================================================


// ============================================================================
//closures
//function can return functions

function f1(){
    function f2(){
        return "I am from f2";
    }
    return f2;
}

const ans = f1();
console.log(ans());//it will print "i am from f2"


function printFullName(firstName, lastName){
    function getFirstName(){
        return firstName;
    }
    return getFirstName;
}

const ans1 = printFullName("Madhurendra" , "Tiwari")
console.log(ans1());

function hello(x){
    const a = "varA"
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans2 = hello("args")
ans2();

function myFunction(){
    let cnt = 0;
    return function() {
        if(cnt===0){
            console.log("you called me");
        }
        else if(cnt>=1){
            console.log("you called me again " , cnt);
        }
        cnt++;
    }
}

const ans3 = myFunction();
ans3();
ans3();
ans3();
// ============================================================================


// ============================================================================
// What is DOM
// programming interface for web documents
// It represents the page so that programs can change the document structure, style, and content. 
// it represents html document in the form of object (key,value pair)
// DOM allows document to be manipulated
console.dir(document);


// select element using get element by id 
const mainHeadingId = document.getElementById("main-heading");
console.log(mainHeadingId);


// select element using query selector

// const mainHeading = document.getElementById("main-heading");
const mainHeadingQuery = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav-items")
const navItem = document.querySelectorAll(".nav-item")//NodeList
const navItemClass = document.getElementsByClassName("nav-item")//HTMLCollections

const label = document.getElementsByTagName("label");
console.log(nav);
console.log(navItem);
console.log(navItemClass);
// innerText ->  all text contained by an element  and all its child
// innerHTML -> innerHtml returns all text, including html tags, that is contained by an element
// textContent ->  returns all text contained by an element and all its child elements if text is hidden or visible
console.log(mainHeadingQuery.innerText);
console.log(mainHeadingQuery.innerHTML);
console.log(mainHeadingQuery.textContent);
console.log(label);


// changing the content of headings
mainHeadingId.innerText = "You changed me using JS"

// changing the styling of headings
mainHeadingId.style.backgroundColor = "blue";
mainHeadingId.style.fontSize = "40px";

// get attributes
console.log(mainHeadingQuery.getAttribute("id"));
console.log(mainHeadingQuery.getAttribute("class"));
console.log(mainHeadingQuery.getAttribute("style"));


// set attributes
const link = document.querySelector("a")
link.setAttribute("href", "https://madhuredra.github.io/Madhurendra-Portfolio")
console.log(link.getAttribute("href")); 

//iterate over element
// we can't use forEach loop with HTMLCollection
navItem.forEach((item) => {
    // console.log(item);
    item.style.backgroundColor = "green";
})


// classList 
const list = document.querySelector("header");
console.log(list.classList);

// add
list.classList.add("underline");

//contains
console.log(list.classList.contains("underline"));

// remove
list.classList.remove("underline");

//contains
console.log(list.classList.contains("underline"));

// toggle
list.classList.toggle("underline");
console.log(list.classList.contains("underline"));

// toggle
list.classList.toggle("underline");
console.log(list.classList.contains("underline"));

// adding HTML using JS
const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li>Learn DOM</li>";


// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach students";
const todoListNew = document.querySelector(".todo-list");

// push from last
todoListNew.append(newTodoItem);
console.log(newTodoItem);

// push from last
todoListNew.prepend(newTodoItem);
console.log(newTodoItem);


// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

const newTodoItem1 = document.createElement("li");
newTodoItem1.innerText = "Teach students";
const todoListNew1 = document.querySelector(".todo-list");
todoListNew.after(newTodoItem1);


// insertAdjecentHTML
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList2 = document.querySelector(".todo-list");
todoList2.insertAdjacentHTML("beforeend", "<li>before end</li>");
todoList2.insertAdjacentHTML("beforebegin", "<li>befor begin</li>");
todoList2.insertAdjacentHTML("afterend", "<li>after end</li>");
todoList2.insertAdjacentHTML("afterbegin", "<li>after begin</li>");


// clone node
//in document.createElement() we can only use prepend or append 
// we can't apply both function to any node 
//that's why we need to clone the node
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);


//static list vs live list

const alllists = document.querySelectorAll(".todo-list1 li")
console.log(alllists);
const sixthLi = document.createElement("li")
sixthLi.textContent = "Item6";
const ul_ = document.querySelector(".todo-list1")
ul_.append(sixthLi);
console.log(alllists);

// querySelectorAll gives static list because it gives NodeList
//getElementsBySomthing gices dynamic list and it givces HTMLCollection


const ul_1 = document.querySelector(".todo-list1")
const alllists1 = ul_1.getElementsByTagName("li")
console.log(alllists1);
const sixthLi1 = document.createElement("li")
sixthLi1.textContent = "Item6";
ul_1.append(sixthLi1);
console.log(alllists1);



// get dimensions
const sectionSignup = document.querySelector(".section-signup");
const info = sectionSignup.getBoundingClientRect();
console.log(info);


// events
// click
const learnMore = document.querySelector(".btn");
learnMore.addEventListener("click", () => {
    console.log("clicked");
    alert("You Clicked Me !")
})


// mouseover
learnMore.addEventListener("mouseover", () => {
    console.log("Mouse Over");
    alert("Mouse Move")
})


// mousemove
learnMore.addEventListener("mousemove", () => {
    console.log("Mouse Move");
    alert("Mouse Over")
})


// keypress event
// mouseover event
const body = document.body;

body.addEventListener("keypress", (e) => {
  console.log(e.key);
});


//event bubbling 
// if you click on any element and if the same even is implemented on parent element then the event of parent will also be called this is bubbling.

const grandParent = document.querySelector(".grandparent")
const child = document.querySelector(".child")
const parent = document.querySelector(".parent")

// child.addEventListener("click",() => {
//     console.log("you clicked on child");
// })
// parent.addEventListener("click",() => {
//     console.log("you clicked on parent");
// })
// grandParent.addEventListener("click",() => {
//     console.log("you clicked on grandparent");
// })

//capturing
// child.addEventListener("click",() => {
//     console.log("captured on child");
// },true)
// parent.addEventListener("click",() => {
//     console.log("captured on parent");
// },true)
// grandParent.addEventListener("click",() => {
//     console.log("captured on grandparent");
// },true)

// event delegation
























































//============================================================================



