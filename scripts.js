
const container = document.querySelector("#gridContainer");

let divs = []

for (let i = 0; i < (16); i++) {
    const div = document.createElement("div");
    divs.push(div);}



divs.forEach(div => {

    for (let i = 0; i < (16); i++) {
    const childDiv = document.createElement("div");
    childDiv.className = "box"
    div.appendChild(childDiv)} })
    

divs.forEach(div => {
    container.appendChild(div);
})
   
