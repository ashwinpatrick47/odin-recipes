const container = document.querySelector(".container")

function createGrid(size){
    const squareSize = 960/size;

    for(let i = 0; i < size * size; i++)
    {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        



        square.addEventListener("mouseover", () => {
            square.classList.add("hovered")
        })
        container.append(square);
    }

}

createGrid(16)