let thisBox;
let newBorder;


let allColors = ["red", "green", "blue", "yellow", "purple", "gold", "brown", "orange", "teal"];
let allBorders = ["dotted", "solid", "double", "groove", "inset", "outset", "ridge"]

function changeButton(id) {
    thisBox = document.getElementById(id);
    thisBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    thisBox.style.border = newBorder;
    
}

function changeButtonAll(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);
   
    firstBox.style.background = document.getElementById(id1); 
    firstBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    firstBox.style.border = newBorder;

    secondBox = document.getElementById(id2); 
    secondBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    secondBox.style.border = newBorder;

    thirdBox = document.getElementById(id3); 
    thirdBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
    newBorder = allBorders[Math.floor(Math.random() * allColors.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)]
    thirdBox.style.border = newBorder;
    
}

function hideButton(id1,id2,id3) {
    thisBox = document.getElementById(id1,id2,id3);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none";
    }
}

function hideButtonAll(id1,id2,id3) {
    thisBox = document.getElementById(id1);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none";
    }

    thisBox = document.getElementById(id2);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none";
    }

    thisBox = document.getElementById(id3);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none";
    }
}

function showButtonAll(id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);

    firstBox.style.display="block";
    secondBox.style.display="block";
    thirdBox.style.display="block";
    firstBox.style.display="block";
    secondBox.style.display="block";
    thirdBox.style.display="block";
   
  
   
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