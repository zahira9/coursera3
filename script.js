function update(previewPic) {
    console.log("Event triggered on: ", previewPic);

    // Afficher la source et l'alt
    console.log("Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);

    // Modifier l'arrière-plan et le texte
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function cancel() {
    console.log("Mouseout or blur event triggered");

    // Réinitialiser l'image de fond et le texte
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Hover over an image below to display here";
}

function initializeGallery() {
    console.log("Page loaded. Initializing gallery...");

    // Sélectionner toutes les images
    const images = document.querySelectorAll(".preview img");

    // Ajouter l'attribut tabindex si non défini
    for (let img of images) {
        if (!img.hasAttribute('tabindex')) {
            img.setAttribute('tabindex', '0');
        }
    }
    console.log("Tabindex attributes added to images.");
}


