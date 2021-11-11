let i = 0
let image = []
let time =6000

image[0] = "images/slides1.png";
image[1] = "images/slides2.png";
image[2] = "images/slides3.png";
image[3] = "images/slides4.png";
image[4] = "images/slides5.png";
image[5] = "images/slides6.png";

let slidesForShow = document.getElementById('slidesForShow');
slidesForShow.src = image[i];

function changeImg() {
    if (i < 5){
        i += 1;
        slidesForShow.src = image[i];
    }
    else{
        i = 0;
        slidesForShow.src = image[i];
    }
    setTimeout(changeImg, time);
}
changeImg()