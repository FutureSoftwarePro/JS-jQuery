let thisBox;
let newBorder;


let allColors = ["red", "green", "blue", "yellow", "purple", "gold", "brown", "orange", "teal"];
let allBorders = ["dotted", "solid", "double", "groove", "inset", "outset", "ridge"]

function changeButton(id) {
    thisBox = document.getElementById(id);
    thisBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    thisBox.style.border = "dotted 2px maroon"
    thisBox.style.border = newBorder;
    
}

function changeButtonAll(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);
   
    firstBox.style.background = document.getElementById(id1); 
    firstBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    firstBox.style.border = "dotted 2px maroon"
    firstBox.style.border = newBorder;

    secondBox = document.getElementById(id2); 
    secondBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    secondBox.style.border = "dotted 2px maroon"
    secondBox.style.border = newBorder;

    thirdBox = document.getElementById(id3); 
    thirdBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    thirdBox.style.border = "dotted 2px maroon"
    thirdBox.style.border = newBorder;
    
}

function hideButton(id1) {
    thisBox = document.getElementById(id1);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none";
    }
}

function resetColors(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);

    firstBox.style.removeProperty("background");
    secondBox.style.removeProperty("background");
    thirdBox.style.removeProperty("background");
    firstBox.style.removeProperty("border");
    secondBox.style.removeProperty("border");
    thirdBox.style.removeProperty("border");

}  