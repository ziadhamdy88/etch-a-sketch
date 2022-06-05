let color = "black";
let mouseClicked = true;

function createBoard(size){
    let board = document.querySelector(".board");
    let divs = board.querySelectorAll("div");
    divs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

createBoard(16);

function changeSize(newSize){
    let errorMessage = document.querySelector("#error");
    if(newSize >= 2 && newSize <= 100){
        errorMessage.style.display = "none";
        createBoard(newSize);
    }
    else{
        errorMessage.style.display = "flex";
    }
}

function colorDiv(){
    if(mouseClicked){
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(newColor){
    color = newColor;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let divs = board.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e) =>{
    if(e.target.tagName != "BUTTON"){
        mouseClicked = !mouseClicked;
        let mode = document.querySelector(".mode");
        if(mouseClicked){
            mode.textContent = "Mode: Coloring";
        }
        else{
            mode.textContent = "Mode: Not Coloring";
        }
    }
});