//https://www.youtube.com/watch?v=5fb2aPlgoys

//getElementById
const title = document.getElementById("main-heading");
console.log(title);

//getElementsByClassName
const listItem = document.getElementsByClassName("list-items");
console.log(listItem);

//getElementsByTagName
const lists = document.getElementsByTagName("li");
console.log(lists);

//querySelector
const container = document.querySelector(".container");
console.log(container);

//querySelectorAll
const allListItems = document.querySelectorAll(".list-items");
console.log(allListItems);

//Text vs Content vs HTML
const firstListItem = document.querySelector(".list-items");
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

//Attributes
const title = document.getElementById("main-heading");
console.log(title.getAttribute("id"));
console.log(title.hasAttribute("class"));
title.setAttribute("class", "main-heading");
title.removeAttribute("class");

//Traversing the DOM = Parents, Children, Siblings
let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

//Traversing the children
console.log(ul.firstElementChild);
console.log(ul.firstElementChild.innerText);
console.log(ul.lastElementChild);
console.log(ul.children);
console.log(ul.children[2]);
console.log(ul.childElementCount);

//Traversing the child nodes
console.log(ul.childNodes); //includes text nodes like spaces and line breaks
console.log(ul.childNodes[0]); //text node
console.log(ul.firstChild); //text node
console.log(ul.lastChild); //text node

//Traversing the siblings
console.log(ul.previousSibling); //could be a text node
console.log(ul.previousElementSibling);
console.log(ul.nextSibling); //could be a text node
console.log(ul.nextElementSibling);

//changing text content
const listItems = document.querySelectorAll(".list-items");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontWeight = "bold";
}

//Create elements
const newListItem = document.createElement("li");
newListItem.textContent = "Indiana Jones";
//newListItem.classList.add("list-items");
newListItem.setAttribute("class", "list-items");
const ul = document.querySelector("ul");
ul.appendChild(newListItem);
console.log('The new list item contains a class attribute:', newListItem.classList.contains("list-items"));

//Remove elements
newListItem.remove();






