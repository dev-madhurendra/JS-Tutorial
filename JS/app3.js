/*
    Topics Covered
    1.Synchronous Programming
    2.Asynchronous Programming
    3.setTimeout
    4.clearTimeout
    5.setInterval
    6.clearInterval
    7.callback in async programming
    8.Need of Promises
    9.Promises
    10.function returning promise
    11.Promise Chaining
    12.Fetch API
    13.Async and await
    14.ES6 module
    15.Local Storage
    16.session Storage

*/

// synchronous programming
// when the execution of operations is done sequentially.
//single threaded
//javascript is synchronous programming language
console.log("Start");

// this for loop can block out next line
for (let index = 0; index < 1000; index++) {
    console.log("Inside For Loop");
}

console.log("End");

// asynchronous programming
//multiple related operations can run concurrently without waiting for other tasks to complete
// multi-threaded

//setTimeout
console.log("Start");

// setTimeout(functon , minimum_delay)
// this function runs after the every line execution completed
//whether we give minimum_delay of zero or not
const _id = setTimeout(function () {
    console.log("Inside setTimeout");
}, 1000);

console.log("End");

// if we don't want to run functon which is inside setTimeout then we will use clearTimeout

//we will give _id of setTimeout function
//setTimeout return a id
clearInterval(_id);



// setInterval
//this will call function after every time which is given
//for below code it will call for every second
const id_ = setInterval(() => {
    console.log(Math.round(Math.random()*10));
}, 1000);

// if we don't want to run the functon which is inside setInterval then we will use clearInterval
clearInterval(id_)

// const heading1 = document.querySelector(".heading1")
// setTimeout(() => {
//     heading1.textContent = "Heading1"
//     heading1.style.color = "blue";
// }, 1000);

// we wan't to change the heading2 after 1 second of heading1
// const heading2 = document.querySelector(".heading2")
// setTimeout(() => {
    // heading2.textContent = "Heading2"
    // heading2.style.color = "purple";
// }, 2000);


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


// Text       Delay   Color

// one        1s      Violet
// two        1s      purple
// three      1s      red
// four       1s      Pink
// five       1s      green
// six        1s      blue

// callback hell  
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },1000)
        
//       },1000)
      
//     },1000)
    
//   },1000)
  
// },1000)


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
  setTimeout(()=>{
    if(element){
      element.textContent = text;
      element.style.color = color;
      if(onSuccessCallback){
        onSuccessCallback();
      }
    }else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
  },time)
}

// pyramid of doom
changeText(heading1, "one","violet",1000,()=>{
  changeText(heading2, "two","purple",2000,()=>{
    changeText(heading3, "three","red",1000,()=>{
      changeText(heading4, "four","pink",1000,()=>{
        changeText(heading5, "five","green",2000,()=>{
          changeText(heading6, "six","blue",1000,()=>{
            changeText(heading7, "seven","brown",1000,()=>{
              changeText(heading8, "eight","cyan",1000,()=>{
                changeText(heading9, "nine","#cda562",1000,()=>{
                  changeText(heading10, "ten","dca652",1000,()=>{
        
                  },()=>{console.log("Heading10 does not exist")})
                },()=>{console.log("Heading9 does not exist")})
              },()=>{console.log("Heading8 does not exist")})
            },()=>{console.log("Heading7 does not exist")})
          },()=>{console.log("Heading6 does not exist")})
        },()=>{console.log("Heading5 does not exist")})
      },()=>{console.log("Heading4 does not exist")})
    },()=>{console.log("Heading3 does not exist")})
  },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})


// Promises
// Promises return future value

const bucket = ['coffee' , 'chips' , 'vegetables' , 'salt' , 'rice']

const friedRicePromise = new Promise((resolve , reject) => {
    if(bucket.includes("vegetables")
    && bucket.includes("salt") 
    && bucket.includes("rice")){
        resolve("Fried Rice")
    }else{
        reject(new Error("Something missing from bucket"))
    }
})
// console.log(friedRicePromise);
// then -> when promise resolve
// catch -> when promise doesn't resolve

friedRicePromise.then((myFriedRice)=>{
    console.log(`let's eat ` , myFriedRice);
},(error)=>{
    console.log(error);
})

friedRicePromise.then((ele)=>{
    console.log(ele);
}).catch((err)=>{
  console.log(err);  
})

function ricePromise(){
    const bucket = ['coffee' , 'chips' , 'vegetables' , 'salt' , 'rice']
    return new Promise((resolve,reject) => {
        if(bucket.includes("vegetables")
        && bucket.includes("salt") 
        && bucket.includes("rice")){
            resolve("Fried Rice")
        }else{
            reject(new Error("Something missing from bucket"))
        }
    })
}

ricePromise().then((ele) => {
    console.log(ele);
}).catch((error) => {
    console.log(error);
})


function myFunPromise1(){
    return new Promise((resolve,reject) => {
        resolve("foo")
    })
}

myFunPromise1().then((value)=>{
    console.log(value);
    value += "bar";
    return value; //it is also a promise and we can make chain of then
}).then((value)=>{
    console.log(value);
    value += "foo";
    return value;
}).then((value) => {
    console.log(value);
    value += "bar";
})


//this is the best alternative for callback hell and pyramid of doom
//respect for promises and value of promises😁

function changeTextUs1(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeTextUs1(heading1, "one", "red", 1000)
  .then(()=>changeTextUs1(heading2, "two", "purple", 1000))
  .then(()=>changeTextUs1(heading3, "three", "green", 1000))
  .then(()=>changeTextUs1(heading4, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading5, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading6, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading7, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading8, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading9, "four", "orange", 1000))
  .then(()=>changeTextUs1(heading10, "four", "orange", 1000))
  .catch((error)=>{
      console.log(error);
  })

//   AJAX
// asynchronous Java Script and XML

// HTTP request (handle communication between client and server)

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest 
// 2.) fetch API 
// 3.) axios


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);
// step1
// console.log(xhr.readyState);//0 -> Client has been created. open() not called yet.
xhr.open("GET",URL);
// console.log(xhr.readyState);//1->open() has been called.
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

//this runs when ready state is 4
xhr.onload = function(){
    const response = xhr.response;
    // converting JSON to JS Object
    const data = JSON.parse(response);
    console.log(data);
}

// xhr.send();

// status code
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)


const URL1 = "https://jsonplaceholder.typicode.com/posts";
fetch(URL1).then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error(response.statusText);
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


// Async & Await
// if any function is async then it will always return promises
// await, that works only inside async functions
// Can’t use await in regular functions
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 4000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();


// localStorage and sessionStorage
// the data stored in localStorage persists until explicitly deleted.Changes made are saved and available for all current and future visits to the site.

// changes are only available per tab.Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.

// getItem
// setItem
// removeItem
// localStorage.setItem(key,value);
// localStorage.removeItem(key);
// localStorage.getItem(key);
