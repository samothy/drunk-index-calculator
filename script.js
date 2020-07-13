function submit() {
    let price = document.getElementById('priceInput').value;
    let volume = document.getElementById('volumeInput').value;
    let alcohol = document.getElementById('abvInput').value;

    let unrounded = (volume/price) * alcohol;
    let drunkIndex = Math.floor(unrounded);

    scoreRating(drunkIndex);

    document.getElementById('output').innerHTML = drunkIndex;
}

function transferInput() {
    let size = document.getElementById('bottles').value;
    document.getElementById('volumeInput').value = size;
    console.log(size);
}

function scoreRating(index) {
    
    let rating;
    
    if (index > 0 && index <= 20) {
        rating = 1;
    } else if (index > 20 && index <= 70) {
        rating = 2;
    } else if (index > 70 && index <= 110) {
        rating = 3;
    } else if (index > 110 && index <= 190) {
        rating = 4;
    } else {
        rating = 5;
    }

    printRating(rating);
}

function printRating(rating) {
    if (rating === 1) {
        document.getElementById('img-1').src = 'gold-star.png';
        document.getElementById('img-2').src = 'gray-star.png';
        document.getElementById('img-3').src = 'gray-star.png';
        document.getElementById('img-4').src = 'gray-star.png';
        document.getElementById('img-5').src = 'gray-star.png';
    } else if (rating === 2) {
        document.getElementById('img-1').src = 'gold-star.png';
        document.getElementById('img-2').src = 'gold-star.png';
        document.getElementById('img-3').src = 'gray-star.png';
        document.getElementById('img-4').src = 'gray-star.png';
        document.getElementById('img-5').src = 'gray-star.png';
    } else if (rating === 3) {
        document.getElementById('img-1').src = 'gold-star.png';
        document.getElementById('img-2').src = 'gold-star.png';
        document.getElementById('img-3').src = 'gold-star.png';
        document.getElementById('img-4').src = 'gray-star.png';
        document.getElementById('img-5').src = 'gray-star.png';
    } else if (rating === 4) {
        document.getElementById('img-1').src = 'gold-star.png';
        document.getElementById('img-2').src = 'gold-star.png';
        document.getElementById('img-3').src = 'gold-star.png';
        document.getElementById('img-4').src = 'gold-star.png';
        document.getElementById('img-5').src = 'gray-star.png';
    } else {
        document.getElementById('img-1').src = 'gold-star.png';
        document.getElementById('img-2').src = 'gold-star.png';
        document.getElementById('img-3').src = 'gold-star.png';
        document.getElementById('img-4').src = 'gold-star.png';
        document.getElementById('img-5').src = 'gold-star.png';
    }
}