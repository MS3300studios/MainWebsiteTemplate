var lightbox = document.getElementById('enlargedPhoto')
var smallimg = document.getElementById('smallimg')

smallimg.addEventListener('click', function(){
    lightbox.style.display = "block";
})

lightbox.addEventListener('click', function(){
    lightbox.style.display = "none";
})




