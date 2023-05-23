/*
Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.
*/

const localStorageButton = document.querySelector(".local-storage-button")

const sessionStorageButton = document.querySelector(".session-storage-button")

const localScore = document.querySelector(".local-score")
const sessionScore = document.querySelector(".session-score")
let getLen1 = localStorage.length ;
let getLen = sessionStorage.length;

localScore.innerText = localStorage.length;
sessionScore.innerText = sessionStorage.length;

localStorageButton.addEventListener("click", () =>{
    getLen1 = localStorage.length + 1;
    localStorage.setItem(`score${getLen1}`,getLen1);
    localScore.innerText = localStorage.getItem(`score${getLen1}`);
})

sessionStorageButton.addEventListener("click", () =>{
    getLen = sessionStorage.length + 1;
    sessionStorage.setItem(`score${getLen}`,getLen);
    sessionScore.innerText = sessionStorage.getItem(`score${getLen}`);
})