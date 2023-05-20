//create a 10x10 of square divs in js
//put them in another div container
//they need to be a grid---flex wrap


let width =500;
let userSize= 10;
let gridSize = width/userSize;




const container = document.querySelector('#container');
container.style.display =('flex');
container.style.flexDirection = ('row');
container.style.flexWrap = ('wrap');
container.style.height = ('500px');
container.style.width = ('500px');
container.style.border =('5px solid pink');

// createGrid(userSize);

// grid.style.backgroundColor =('trasparent');

function createGrid(userSize){
    for(let i =1; i<=(userSize**2);i++){
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
    createGrid(userSize);


    //hacer que cambie el background color a negro al hacer click
    const grids = document.querySelectorAll('#container div');
    
    function clickToChange(grid){
        grid.addEventListener('mousedown',()=>
        {
            grid.style.backgroundColor = ('black');
        })
    }
    grids.forEach(grid=>clickToChange(grid))

    //3 añadir hover
    //4 añador boton que pregunte por el numero de grids

    //16x16
    const controls = document.querySelector('#controls');
    const btn16 = document.createElement('button');
    controls.appendChild(btn16);
    btn16.textContent = ('16x16')

    //btn16 cambia userSize = 16 e invoca createGrid

    // btn16.addEventListener('click', function(){
    //     userSize = 16;
    //     gridSize = width/userSize;

        

    // })

    //extra
    //en vez de cambia a negro el background, que cambie a un color al azar
    //then try having each pass just add another 10% of black 
        //to it so that only after 10 passes is the square completely black.

        
        
            
    
    
    


