
//event bubbling 
// if you click on any element and if the same even is implemented on parent element then the event of parent will also be called this is bubbling.

const grandParent = document.querySelector(".grandparent")
const child = document.querySelector(".child")
const parent = document.querySelector(".parent")


grandParent.addEventListener("click",(e) => {
    if(e.target.classList.contains("child")){
        console.log(`you clicked on child`);
    }else if(e.target.classList.contains("parent")){
        console.log(`you clicked on parent`);
    }else{
        console.log(`you clicked on grandParent`);
    }
})

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
// so we don't need to implement same event to each child we can just apply on parent and use.

