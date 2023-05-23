const rootNode = document.getRootNode();
console.log(rootNode);

//number of children in the root node
console.log(rootNode.childNodes);

// iterate over rootNode
for (let i = 0; i < rootNode.childNodes.length; i++) {
    console.log(rootNode.childNodes[i]);
}


// iterate over rootNode's children
for (let i = 0; i < rootNode.childNodes.length; i++) {
    const childrenNode = rootNode.childNodes[i];
    console.log(childrenNode);
    for (let j = 0;j<childrenNode.childNodes.length; j++) {
        console.log(childrenNode.childNodes[j]);
    }
}

// traversing parent node from child node
const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333"


const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title.innerText);
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);
