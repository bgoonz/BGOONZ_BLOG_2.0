/* Create a paragraph element for each number from 1 to 10, and add a click handler to each paragraph. */
for(let i = 1; i <= 10; i++) {
  const para = document.createElement('p');
  para.textContent = 'This is paragraph ' + i + '.';
  document.body.appendChild(para);
  addHandler(para, i);
}

function addHandler(para, i) {
  para.onclick = function() {
    alert('Hello from paragraph ' + i + '!');
  }
