/*
Question 1:
Write a program to demonstrate how a function can be passed as a parameter to another function.
*/

// function sayHi 
const sayHi = (name) => {
    return "Hello, " + name;
}

// function sayBye
const sayBye = (name) => {
    return "Bye," + name;
}

// function callingFunction which takes parameter sayHi (which is function ) and name (which is variable)
const callingFunction = (func , name = "") => {
    // this function calling parameter function
    console.log(func(name));
}

// calling function
callingFunction(sayHi , "Madhurendra");
callingFunction(sayBye);

/*
Question 2:
An arrow function takes two arguments firstName and lastName and returns a 2 letter 
string that represents the first letter of both the arguments. For the arguments Roger and Waters, t
he function returns ‘RW’. Write this function.Submit the github link to the code
*/

// taking arguments firstname and lastname
// returning first and last character of firstName and lastName respectively
const shortenedName = (firstName , middleName = "" , lastName) => {
    return (firstName[0] + (middleName.length>0?middleName[0]:"" ) + lastName[0]);
}

// calling shortenedName function
console.log(shortenedName("Madhurendra" ,"Nath" ,"Tiwari"));















