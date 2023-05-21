//container
const container = document.querySelector('#container');
container.style.display = ('flex');
container.style.gap = ('10px');
//menuContainer
const menuContainer = document.createElement('div');
menuContainer.className = ('menuContainer');
container.appendChild(menuContainer);
menuContainer.style.display = ('flex');
menuContainer.style.flexDirection = ('column');
// menuContainer.style.flex = ('auto');
menuContainer.style.border = ('1px solid red')
menuContainer.style.height = ('500px');
menuContainer.style.width = ('200px');
//menuContainer buttons
//btn8
const btn8 = document.createElement('button');
btn8.className = ('btn8');
menuContainer.appendChild(btn8);
btn8.textContent = ('8x8');
//16x16
const btn16= document.createElement('button');
btn16.className = ('btn16');
menuContainer.appendChild(btn16);
btn16.textContent = ('16x16');
//32x32
const btn32 = document.createElement('button');
btn32.className = ('btn32');
menuContainer.appendChild(btn32);
btn32.textContent = ('32x32');
//btnClear
const btnClear = document.createElement('button');
btnClear.className = ('btnClear');
menuContainer.appendChild(btnClear);
btnClear.textContent = ('Clear');
btnClear.style.alignSelf = ('center');



//gridContainer
const gridContainer = document.createElement('div');
gridContainer.className = ('gridContainer');
container.appendChild(gridContainer);
gridContainer.style.border = ('1px solid red')
gridContainer.style.height = ('500px');
gridContainer.style.width = ('500px');
gridContainer.style.display = ('flex');
gridContainer.style.flexShrink = ('0');
gridContainer.style.flexWrap = ('wrap');


//gridGenerator empezar con 8x8
//tama;o de cada div----gridContainer.heigth/8
let gridContainerHeigth = gridContainer.style.height;

function gridGenerator(size){
let gridSize = 500/8;

    for(let i = 0; i<size**2; i++){
        const grids = document.createElement('div');
        gridContainer.appendChild(grids);
        grids.className = ('grids');
        grids.style.border = ('1px solid gray')
        grids.style.boxSizing = ('border-box');
        grids.style.height =(gridSize+'px');
        grids.style.width =(gridSize+'px');


    }
}

function gridRemove(){
let rmGrids = document.getElementsByClassName('grids');

    while(rmGrids.length>0){
        rmGrids[0].remove();
    }
}

//buttons click
btn8.addEventListener('click',()=> gridGenerator(8) );
btn16.addEventListener('click',()=> gridGenerator(16) );
btnClear.addEventListener('click',()=> gridRemove())


// gridGenerator();




