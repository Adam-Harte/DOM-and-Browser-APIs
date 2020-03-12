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

//selecting sibling elements
const previousSiblingElement = ul.previousElementSibling;
console.log(previousSiblingElement);
const previousSiblingNode = ul.previousSibling;
console.log(previousSiblingNode);
const nextSiblingElement = ul.nextElementSibling;
console.log(nextSiblingElement);
const nextSiblingNode = ul.nextSibling;
console.log(nextSiblingNode);

//element styling
ul.style.backgroundColor = 'red';
ul.className = 'white bold';
const button = document.querySelector('button');
button.addEventListener('click', () => {
  ul.classList.toggle('invisible');
});

//creating and inserting elements
ul.innerHTML = ul.innerHTML + '<li>Item 4</li><li>Item 5</li>';
const div = document.querySelector('div');
div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');

const newLi = document.createElement('li');
newLi.textContent = 'Item 6';
newLi.style.color = 'white';
ul.appendChild(newLi);
