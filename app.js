//create a 10x10 of square divs in js
//put them in another div container
//they need to be a grid---flex wrap

//funcion tama;o grid

const width =500;
const userSize= 10;
let gridSize = width/userSize;




const container = document.querySelector('#container');
container.style.display =('flex');
container.style.flexDirection = ('row');
container.style.flexWrap = ('wrap');
container.style.height = ('500px');
container.style.width = ('500px');
container.style.border =('5px solid pink');

createGrid(userSize);

// grid.style.backgroundColor =('trasparent');

function createGrid(userSize){
    for(let i =1; i<=(userSize*userSize);i++){
        const grid = document.createElement('div');
        container.appendChild(grid);
        grid.style.border = ('1px solid grey');
        // grid.style.flex =('1')
        grid.style.boxSizing = ('border-box');
        grid.style.height = (gridSize+'px');
        grid.style.width = (gridSize+'px');
        grid.style.backgroundColor = ('white');
    
    
    }
    }

    //hacer que cambie el background color a negro al hacer click
    const grids = document.querySelectorAll('#container div');
    
    function clickToChange(grid){
        grid.addEventListener('click',()=>
        {
            grid.style.backgroundColor = ('black');
        })
    }
    grids.forEach((grid)=>clickToChange(grid))

    // grids.forEach((grid) => {
    //     clickToChange(grid);
    //   });
        
        
            
    
    
    


