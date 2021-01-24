let priceDOM = document.getElementById('price-input');
let volumeDOM = document.getElementById('volume-input');
let abvDOM = document.getElementById('abv-input');
let volDropdown = document.getElementById('vol-dropdown');
let comments = document.getElementById('comments');
let ethanol = document.getElementById('ethanol');
let containerSize = document.getElementById('fill-size');

function calculate(source) {
    let drunkIndex = (volumeDOM.value / priceDOM.value) * abvDOM.value;
    let rating = getRating(drunkIndex);

    document.getElementById('drunk-index-output').innerHTML = drunkIndex.toFixed(0);
    document.getElementById('rating').innerHTML = rating;

    if (source === 'custom') {
        comments.innerHTML = 'Pick a preset above or enter your own values on the right.';
    }
}

function volumeFill(selection, name) {
    volumeDOM.value = selection;
    volDropdown.innerHTML = name;
}

function getRating(num) {
    if (num < 10) {
        return ('1/10');
    } else if (num < 20) {
        return ('2/10');
    } else if (num < 30) {
        return ('3/10');
    } else if (num < 50) {
        return ('4/10');
    } else if (num < 75) {
        return ('5/10');
    } else if (num < 100) {
        return ('6/10');
    } else if (num < 150) {
        return ('7/10');
    } else if (num < 200) {
        return ('8/10');
    } else if (num == 'Infinity') {
        return ("10/10 - Can't beat free.")
    } else {
        return ('9/10');
    }
}

function populate(selection) {
    if (selection == 'budlight') {
        formFill(19.99, 288, '24-pack', 4.2);
        comments.innerHTML = "Light beer is a safe choice, but bloating counteracts the modest score somewhat.";
    } else if (selection == 'lagunitas') {
        formFill(9.99, 72, '6-pack', 6.2);
        comments.innerHTML = "Unsurprisingly, craft beer does not rank very highly. High taste, low utilitarian value."
    } else if (selection == 'fireball') {
        formFill(12.99, 25.36, 'Bottle (750mL)', 33);
        comments.innerHTML = "Interestingly, Fireball only ranks slightly higher than light beer despite being a hard liquor."
    } else if (selection == 'fleischmanns') {
        formFill(8.99, 59.2, 'Handle (1.5L)', 40);
        comments.innerHTML = "This vodka is revolting in every way, but its sheer economy results in a <em>virtually</em> unbeatable score.";
    } else if (selection == 'barefoot') {
        formFill(4.97, 25.4, 'Bottle (750mL)', 6);
        comments.innerHTML = "Despite being cheap, the low ABV of this wine means it's not worth enduring the taste — or the hangover.";
    } else if (selection == 'armand') {
        formFill(2299.95, 1014.42, 'Melchizedek (30L)', 12.5);
        comments.innerHTML = "Buying in bulk doesn't help when the wine is this fancy, as evidenced by the abysmal score. Sorry, Jay-Z."
    } else if (selection == 'everclear') {
        formFill(13.98, 25.4, 'Bottle (750mL)', 95);
        comments.innerHTML = "At 95% ABV it's no surprise that this grain alcohol ranks highly. That said, its only recommended use is fueling your lawnmower.";
    } else if (selection == 'jackdaniels') {
        formFill(2.99, 1.6907, 'Shooter (50mL)', 40);
        comments.innerHTML = "Buying individual shooters is an inefficient way to get drunk, even with the good stuff.";
    }

    calculate();
}

function formFill(price, vol, drop, abv) {
    priceDOM.value = price;
    volumeDOM.value = vol;
    volDropdown.innerHTML = drop;
    abvDOM.value = abv;
}

function pureEthanol(volume, abv) {
    let ethVal = (volume * (abv / 100)).toFixed(2);
    return ethVal + ' oz';
}

function containerFunction(ethanol) {
    
    if (ethanol < 0.5) {
        return 'a contact case.'
    } else if (ethanol < 1) {
        return 'a '
    }
}