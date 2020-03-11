//selecting elements
document.getElementById('main-title');
document.querySelector('ul');
document.getElementsByClassName('list-item');
document.querySelectorAll('.list-item');
document.querySelector('ul li:last-of-type');

//manipulating elements
const title = document.querySelector('h1');
title.textContent = 'Changed title';
title.className = 'title';
title.style.backgroundColor = 'red';
title.style.color = 'white';
title.setAttribute('id', 'new-title');

//selecting child elemnts
const ul = document.querySelector('ul');
const childElements = ul.children;
console.log(childElements);
const childeNodes = ul.childNodes;
console.log(childeNodes);
const secondChild = ul.children[1];
console.log(secondChild);
const firstChildElement = ul.firstElementChild;
console.log(firstChildElement);
const firstChildNode = ul.firstChild;
console.log(firstChildNode);
const lastChildElement = ul.lastElementChild;
console.log(lastChildElement);
const lastChildNode = ul.lastChild;
console.log(lastChildNode);

//selecting parent and ancesotr elements
const li = document.querySelector('li');
const parent = li.parentElement;
console.log(parent);
const ancestor = li.closest('body');
console.log(ancestor);
