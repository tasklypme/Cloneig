//animation images

setInterval (function (){
    var images = document.querySelector(".images")
    var pics = document.querySelector(".images img")
    var random = Math.floor(Math.random() * 3)
    if (random == 1) {
        pics.src = "/img2.png";
        
     } else if(random == 2){
         pics.src = "/img3.png";
     } else {
         pics.src = "/img4.png";
     }
},2000)