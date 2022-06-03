let mainDiv = document.querySelector("#main");


for(let i=0; i<16; i++){
    let innerDiv = document.createElement("div");
    for(let j=0; j<16; j++){
        let div = document.createElement("div");
        div.classList.add("grid");
        innerDiv.appendChild(div);
    }
    mainDiv.appendChild(innerDiv);
}
const divs = document.querySelectorAll(".grid");
divs.forEach((div) => {
    div.addEventListener("mouseover", function(){
        console.log("inside");
        div.style.backgroundcolor = "blue";
        setTimeout(function(){
            div.style.backgroundcolor = "";
        }, 500);
    }, false);
});