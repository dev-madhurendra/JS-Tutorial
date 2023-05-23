const one = document.querySelector(".buttons .one")
// console.log(one);
const two = document.querySelector(".buttons .two")
// console.log(two);
const three = document.querySelector(".buttons .three")
// console.log(three);
console.log(this);

one.addEventListener("click", (e) => {
    // document.querySelector(".first").style.backgroundColor = "red"
    // document.querySelector(".third").style.backgroundColor = "white"
    alert("You clicked Me")
})
one.addEventListener("mouseover", (e) => {
    document.querySelector(".first").style.backgroundColor = "red"
    document.querySelector(".third").style.backgroundColor = "white"
})
two.addEventListener("click", (e) => {
    document.querySelector(".second").style.
    backgroundColor = "green"
    document.querySelector(".first").style.backgroundColor = "white"
})
three.addEventListener("click", (e) => {
    document.querySelector(".third").style.backgroundColor = "blue"
    document.querySelector(".second").style.
    backgroundColor = "white"
})