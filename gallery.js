var imgList = document.querySelectorAll('#img')
var lightbox = document.getElementById('lightbox')
var lightboxImg = document.getElementById('lightbox_img')

for(var i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click', function(event){
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightboxImg.src = event.target.src;
    })
}

lightbox.addEventListener('click', function(){
    lightbox.style.display = "none";
})







