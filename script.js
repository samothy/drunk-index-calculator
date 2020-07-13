function submit() {
    let price = document.getElementById('priceInput').value;
    let volume = document.getElementById('volumeInput').value;
    let alcohol = document.getElementById('abvInput').value;

    let unrounded = (volume/price) * alcohol;
    let drunkIndex = unrounded.toFixed(2);

    if (price === 0) {
        drunkIndex = 'Infinity (Everything tastes better when it\'s free.';
    }

    document.getElementById('drunkIndex').innerHTML = 'Drunk Index: ' + drunkIndex;
}

function transferInput() {
    let size = document.getElementById('bottles').value;
    document.getElementById('volumeInput').value = size;
    console.log(size);
}