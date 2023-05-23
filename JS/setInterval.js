const body = document.body;
const _id = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 1000);

document.querySelector('body').addEventListener('click',() => {
    clearInterval(_id);
})