const fullImg = document.getElementById('fullImg');
const fullImgContainer = document.getElementById('fullImgContainer');

function openImg(pick) {
    fullImgContainer.style.display = 'flex';
    fullImg.src = pick;
    // image order
    currentIndex = images.indexOf(pick);
}

function closeImg() {
    fullImgContainer.style.display = 'none';
}

// next previous btn

let images = [];

const imgElements = document.querySelectorAll('.img-gallery img');
imgElements.forEach(img => images.push(img.src));

let currentIndex = 0;


function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    fullImg.src = images[currentIndex];
}

function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fullImg.src = images[currentIndex];
}
