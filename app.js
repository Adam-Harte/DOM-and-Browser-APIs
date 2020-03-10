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
