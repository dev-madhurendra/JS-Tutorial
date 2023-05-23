/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/
function getData(uId) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(uId){
                resolve(`${uId}@gmail.com`);
            }else{
                reject(new Error("uId not found !"))
            }
        }, 4000);
    });
}

console.log("start");
var email = getData("skc").then((data) => {
    console.log("Email id of the user id is: " + data);
});
console.log("end");



console.log("start");
var email = (async () => {
    const meta = await getData('test.png');
    console.log("Email: " , meta);
})();
console.log("end");


// How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?
