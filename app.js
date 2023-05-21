//container
const container = document.querySelector('#container');
container.style.display = ('flex');
container.style.gap = ('10px');
//menuBar
const menuBar = document.createElement('div');
container.appendChild(menuBar);
menuBar.style.display = ('flex');
menuBar.style.flexDirection = ('column');
menuBar.style.border = ('1px solid red')
menuBar.style.height = ('500px');
menuBar.style.width = ('200px');
//menuBar buttons
//btn8
const btn8 = document.createElement('button');
menuBar.appendChild(btn8);
btn8.textContent = ('8x8');
//16x16
const btn16= document.createElement('button');
menuBar.appendChild(btn16);
btn16.textContent = ('16x16');
//32x32
const btn32 = document.createElement('button');
menuBar.appendChild(btn32);
btn32.textContent = ('32x32');


//grid
const grid = document.createElement('div');
container.appendChild(grid);
grid.style.border = ('1px solid red')
grid.style.height = ('500px');
grid.style.width = ('500px');




