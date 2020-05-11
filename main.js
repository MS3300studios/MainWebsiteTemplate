let imgs = document.querySelectorAll('.galleryimage')

for (let img of imgs) {
    img.addEventListener('click', showLightbox)
}
// dodaj obsługę kliknięcia w zdjęcie
// funkcja pokazująca lightbox-a
function showLightbox(event) {
    let lightboxDiv = document.querySelector('#lightbox')
    lightboxDiv.style.display = "flex"
    // pobranie adresu zdjęcia z klikniętego znacznika img
    let imgSrc = event.target.src
    // pobranie znacznika img z lightboxa
    let lightboxImg = document.querySelector('#lightbox-img')
    // wpisanie nowego adresu do img w lightboxie
    lightboxImg.src = imgSrc
}


// obsługa zamykania lightbox-a
let lightboxDiv = document.querySelector('#lightbox')
// zapisz się na kliknięcie w #lightbox
lightboxDiv.addEventListener('click', hideLightbox)
// funkcja zamykająca lightbox
function hideLightbox(event) {
    lightboxDiv.style.display = "none"
}