function upDate(previewPic) {
    console.log("Événement upDate déclenché");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')"; 
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function myFunction() {
    console.log("Événement déclenché sur input");
}

function initialize() {
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`Image ${i + 1} ajoutée avec tabindex`);
    }
}
