function changeGridSize() {
    newGridSize = prompt("what grid size (10-100)");
    

    gridContainer = document.querySelector(".gridContainer");
    grid = document.querySelector("#grid");
    grid.innerHTML = ""
    renderGrid(parseInt(newGridSize));
    
}




function renderGrid(gridsize=16) {

    const grid = document.querySelector("#grid");

    for (let i = 0; i < gridsize * gridsize; i++) {

        const box = document.createElement("div");
        box.className = "box";
        box.style.width = `calc(100% / ${gridsize})`;
        box.style.aspectRatio = "1 / 1";

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = getRandomColour()
            });

        grid.appendChild(box);
     }
    }




function getRandomColour() {

    let choice = Math.random();

    if (choice < 0.11) {
        return "green"
    }

    else if (choice > 0.11 && choice <0.21) {
        return "blue"
    }

    else if (choice > 0.21 && choice < 0.31) {
        return "yellow"
    }

    else if (choice > 0.31 && choice < 0.41) {
        return "orange"
    }

    else if (choice > 0.41 && choice < 0.51) {
        return "red"
    }

    else if (choice > 0.51 && choice <0.61 ) {
        return "pink"
    }

    else if (choice > 0.61 && choice < 0.71) {
        return "purple"
    }

    else if (choice > 0.71 && choice < 0.81) {
        return "white"
    }

    else if (choice > 0.81 && choice < 0.91) {
        return "black"
    }

    else if (choice > 0.91 && choice < 1) {
        return "grey"
    }


}







renderGrid(16);
    
