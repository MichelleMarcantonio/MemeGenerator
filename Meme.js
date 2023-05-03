const memeDiv = document.getElementById("meme");
const form = document.getElementById("submit");

form.addEventListener("submit", addMeme);

function addMeme(e) {
    e.preventDefault();
    let imageFile = document.getElementById("imageFile").value;
    let topText = document.getElementById("topText").value;
    let bottomText = document.getElementById("bottomText").value;
    let containerDiv = document.createElement("div");

    containerDiv.classList.add("container");
    let image = document.createElement("img");
    image.classList.add("img");
    image.src = imageFile;
    containerDiv.appendChild(image);

    let topDiv = addText(topText, "top");
    containerDiv.appendChild(topDiv);

    let bottomDiv = addText(bottomText, "bottom");
    containerDiv.appendChild(bottomDiv);
    containerDiv.addEventListener("click", deleteMeme);
    memeDiv.appendChild(containerDiv);
    form.reset();
}

function addText(text, className) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    newDiv.classList.add(className);
    return newDiv;
}

function deleteMeme(e) {
    console.log(e.target);
    e.target.remove()
}


//
//let upperText = document.createElement("top");
//containerDiv.appendChild(top);
//let lowerText = document.createElement("bottom");
//containerDiv.appendChild(bottom);
//