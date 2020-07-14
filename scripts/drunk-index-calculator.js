function submit() {

    // Assign user input to variables
    let price = document.getElementById('price-input').value;
    let volume = document.getElementById('volume-input').value;
    let alcohol = document.getElementById('abv-input').value;

    // Do the math and round the result
    let unrounded = (volume/price) * alcohol;
    let drunkIndex = Math.floor(unrounded); 

    // Calculate and present the 5-star rating
    scoreRating(drunkIndex);

    // Present Drunk Index result
    document.getElementById('output').innerHTML = drunkIndex;
}

function transferInput() {

    // Take the selected value from the drop-down menu and place it in the volume input field
    let size = document.getElementById('volume-dropdown').value;
    document.getElementById('volume-input').value = size;
}

function scoreRating(index) {
    
    // Calculate the rating
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

    // Pass rating onto the printing function
    printRating(rating);
}

function printRating(rating) {

    // Change the color of a certain amount of stars based on the rating variable
    if (rating === 1) {
        document.getElementById('img-1').src = '../assets/images/gold-star.png';
        document.getElementById('img-2').src = '../assets/images/gray-star.png';
        document.getElementById('img-3').src = '../assets/images/gray-star.png';
        document.getElementById('img-4').src = '../assets/images/gray-star.png';
        document.getElementById('img-5').src = '../assets/images/gray-star.png';
    } else if (rating === 2) {
        document.getElementById('img-1').src = '../assets/images/gold-star.png';
        document.getElementById('img-2').src = '../assets/images/gold-star.png';
        document.getElementById('img-3').src = '../assets/images/gray-star.png';
        document.getElementById('img-4').src = '../assets/images/gray-star.png';
        document.getElementById('img-5').src = '../assets/images/gray-star.png';
    } else if (rating === 3) {
        document.getElementById('img-1').src = '../assets/images/gold-star.png';
        document.getElementById('img-2').src = '../assets/images/gold-star.png';
        document.getElementById('img-3').src = '../assets/images/gold-star.png';
        document.getElementById('img-4').src = '../assets/images/gray-star.png';
        document.getElementById('img-5').src = '../assets/images/gray-star.png';
    } else if (rating === 4) {
        document.getElementById('img-1').src = '../assets/images/gold-star.png';
        document.getElementById('img-2').src = '../assets/images/gold-star.png';
        document.getElementById('img-3').src = '../assets/images/gold-star.png';
        document.getElementById('img-4').src = '../assets/images/gold-star.png';
        document.getElementById('img-5').src = '../assets/images/gray-star.png';
    } else {
        document.getElementById('img-1').src = '../assets/images/gold-star.png';
        document.getElementById('img-2').src = '../assets/images/gold-star.png';
        document.getElementById('img-3').src = '../assets/images/gold-star.png';
        document.getElementById('img-4').src = '../assets/images/gold-star.png';
        document.getElementById('img-5').src = '../assets/images/gold-star.png';
    }
}