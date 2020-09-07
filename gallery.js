var imgList = document.querySelectorAll('#img')
var lightbox = document.getElementById('lightbox')
var lightboxImg = document.getElementById('lightbox_img')
var ultimateSource = null;
var newCell = null;
var direction = null;
//buttons
var left = document.getElementById('leftImgBtn')
var right = document.getElementById('rightImgBtn')
var x = document.getElementById('xImgBtn')
//array of images
var imgSources = []
for(var i = 0; i < imgList.length; i++){
    imgSources.push(imgList[i].currentSrc)
}
var lastCell = imgSources.length-1;
var firstCell = 0;


for(var i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click', function(event){
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightboxImg.src = event.target.src;
        ultimateSource = event.target.src;
    })
}

x.addEventListener('click', function(){
    lightbox.style.display = "none";
})

function changeImage(currSrc, dir){
    var cell = imgSources.indexOf(currSrc)

    if(cell == lastCell){
        if(dir == false){
            newCell = cell-1;
            lightboxImg.src = imgSources[newCell]
            ultimateSource = imgSources[newCell]
        }
    }
    else if(cell == firstCell){
        if(dir == true){
            newCell = cell+1;
            lightboxImg.src = imgSources[newCell]
            ultimateSource = imgSources[newCell]
        }
    }
    else{
        if(dir == true) newCell = cell+1;
        else newCell = cell-1;
    
        lightboxImg.src = imgSources[newCell]
        ultimateSource = imgSources[newCell]
    }
}


addEventListener('click', function(event){
     if(event.target == right){
        direction = true;
        changeImage(ultimateSource, direction);
     }
     else if(event.target == left){
        direction = false;
        changeImage(ultimateSource, direction);
     }
})








