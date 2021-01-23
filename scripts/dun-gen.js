

// outputMode 1 is same letter, outputMode 2 is different letters.
let outputMode = 1;

// Declare these outside the generate() function so that the arrow buttons can access them
let descLetter;
let placeLetter;
let descNum;
let placeNum;
let descSelection;
let placeSelection;

// Assign DOM variables
let toggleButton = document.getElementById('bottom-left-btn');
let descOutput = document.getElementById('desc-output');
let placeOutput = document.getElementById('place-output');
let totalComboOutput = document.getElementById('total-combos');

// Populate lists
let descList = [
    ['Abandoned', 'Abysmal', 'Accursed', 'Acrimonious', 'Agonizing', 'Ailing', 'Ancient', 'Arcane', 'Ashen'],

    ['Baneful', 'Barbarous', 'Barren', 'Beastly', 'Bedrock', 'Beleaguered', 'Bewildering', 'Bioluminescent', 'Bitter', 'Blanched', 'Bleak', 'Blighted', 'Bloodless', 'Bloodstained', 'Blooming', 'Booby-trapped', 'Bottomless', 'Bristling', 'Broken', 'Brooding', 'Burning', 'Burnt', 'Bygone'],

    ['Cadaverous', 'Cantankerous', 'Caustic', 'Clammy', 'Clandestine', 'Cloistered', 'Cloying', 'Collapsed', 'Condemned', 'Consecrated', 'Contaminated', 'Corrupted', 'Creeping', 'Crepuscular', 'Crooked', 'Cruel', 'Crystal', 'Culpable', 'Keening', 'Questionable', 'Quivering'],

    ['Damned', 'Dank', 'Decrepit', 'Deplorable', 'Derelict', 'Desolate', 'Despicable', 'Despondent', 'Detestable', 'Dim', 'Dingy', 'Diseased', 'Dismal', 'Dormant', 'Dripping',],

    ['Ebony', 'Eerie', 'Enchanted', 'Encrusted', 'Enduring', 'Enervating', 'Eroded', 'Estranged', 'Eternal', 'Evacuated', 'Execrable', 'Exiled', 'Expansive', 'Extraterrestrial'],

    ['Faded', 'Fathomless', 'Feculent', 'Feral', 'Fertile', 'Festering', 'Fiendish', 'Flooded', 'Flourishing', 'Foreboding', 'Forgotten', 'Forlorn', 'Forsaken', 'Foul', 'Frigid', 'Frowning', 'Frozen', 'Fungal'],

    ['Ghastly', 'Ghoulish', 'Gilded', 'Glacial', 'Glittering', 'Gloomy', 'Glowering', 'Granite', 'Grievous', 'Grimy', 'Grisly', 'Grubby', 'Gruesome', 'Grungy', 'Gutted'],

    ['Half-Buried', 'Harrowing', 'Haunted', 'Hazardous', 'Hebetudinous', 'Heinous', 'Hellish', 'Hermetic', 'Hidden', 'Horrible', 'Hostile', 'Howling', 'Hulking', 'Hypnotic'],

    ['Icy', 'Ignoble', 'Illusory', 'Immortal', 'Infected', 'Inimical', 'Inky', 'Insular', 'Ivory'],

    ['Joyless', 'Jeopardous'],

    ['Lambent', 'Languid', 'Lethargic', 'Leviathan', 'Lightless', 'Loathsome', 'Lonely', 'Looming', 'Luminescent', 'Lurid', 'Lush'],

    ['Malevolent', 'Malignant', 'Malodorous', 'Marble', 'Melancholy', 'Menacing', 'Miasmatic', 'Moaning', 'Moonlit', 'Morbid', 'Moribund', 'Mossy', 'Mournful', 'Murky', 'Musty', 'Mysterious'],

    ['Narrow', 'Nefarious', 'Neglected', 'Nettled', 'Noxious', 'Numinous'],

    ['Obfuscated', 'Obsidian', 'Odious', 'Ominous', 'Onyx', 'Opprobrious', 'Oracular', 'Ordained', 'Overgrown'],

    ['Pallid', 'Paranormal', 'Parasitic', 'Peaceful', 'Perilous', 'Pernicious', 'Perplexing', 'Pestiferous', 'Pestilential', 'Petulant', 'Piceous', 'Pillaged', 'Placid', 'Precarious', 'Primeval', 'Primitive', 'Profane', 'Profound', 'Pustular', 'Putrid', 'Puzzling'],

    ['Ragged', 'Rancid', 'Rancorous', 'Ransacked', 'Ravaged', 'Razed', 'Recondite', 'Reeking', 'Remote', 'Reprehensible', 'Repulsive', 'Resentful', 'Restricted', 'Riddled', 'Ringing', 'Rotted', 'Rotten', 'Rugged', 'Runic'],

    ['Sable', 'Sacred', 'Sallow', 'Sanguine', 'Scarlet', 'Scorching', 'Secluded', 'Seething', 'Sentient', 'Sickening', 'Sickly', 'Silent', 'Sinister', 'Slumbering', 'Somber', 'Somnolent', 'Sordid', 'Sorrowful', 'Spiteful', 'Squalid', 'Stagnant', 'Subterranean', 'Sulphurous', 'Sultry', 'Sunken', 'Sweltering'],

    ['Taboo', 'Tainted', 'Tarnished', 'Tattered', 'Teeming', 'Temperate', 'Tenebrous', 'Titanic', 'Torrid', 'Toxic', 'Tranquil', 'Treacherous', 'Tribal', 'Troubled', 'Troubling'],

    ['Unfathomable', 'Unholy', 'Unsettling', 'Unspeakable', 'Untamed'],

    ['Vacant', 'Vacuous', 'Vast', 'Venerated', 'Vengeful', 'Venomous', 'Verdant', 'Verminous', 'Vicious', 'Vile', 'Villainous', 'Vindictive', 'Violated', 'Viperous', 'Virulent', 'Volcanic', 'Vulgar'],

    ['Waxen', 'Weary', 'Weathered', 'Whispering', 'Wicked', 'Wind-Blasted', 'Windy', 'Wintry', "Witches'", 'Withering', "Wizard's", 'Woeful', 'Worn'],

    ['Charred', 'Chattering', 'Cheerless', 'Chilling'],

    ['Shadowy', 'Shapeless', 'Shivering', 'Shimmering', 'Shrouded', 'Shuddering']
];

let placeList = [
    ['Abbey', 'Abode', 'Abyss', 'Adjunct', 'Alcazar', 'Alcove', 'Altar', 'Aperture', 'Aqueduct', 'Arcade', 'Arch', 'Archive', 'Arena', 'Armory', 'Artery', 'Asylum', 'Aviary'],

    ['Barracks', 'Basement', 'Basilica', 'Basin', 'Basin', 'Bastion', 'Bathhouse', 'Beach', 'Beacon', 'Belfry', 'Bethel', 'Boneyard', 'Bowels', 'Bridge', 'Bunker', 'Burial Ground', 'Burrow'],

    ['Cache', 'Caldera', 'Camp', 'Canal', 'Canyon', 'Catacombs', 'Cathedral', 'Caverns', 'Cavity', 'Chasm', 'Coliseum', 'Colonnade', 'Colony', 'Column', 'Conduit', 'Conjunction', 'Convergence', 'Corridor', 'Crater', 'Crevice', 'Crossroads', 'Crypt', 'Keep', 'Quarry'],

    ['Decussation', 'Decussation', 'Demesne', 'Den', 'Depot', 'Depths', 'Domain', 'Dome', 'Door', 'Dungeon', 'Dwelling'],

    ['Edifice', 'Encampment', 'Enclave', 'Entrance', 'Entrenchment', 'Estate', 'Estuary', 'Excavation', 'Eyrie'],

    ['Fissure', 'Flume', 'Forge', 'Formation', 'Fortress', 'Forum', 'Foyer', 'Furnace', 'Furrow'],

    ['Gallery', 'Gallows', 'Garrison', 'Gate', 'Gorge', 'Grave', 'Grotto'],

    ['Habitation', 'Harbor', 'Hatchery', 'Haven', 'Hideout', 'Highway', 'Hive', 'Hole', 'Hollow'],

    ['Incinerator', 'Inurning', 'Island'],

    ['Jail', 'Junction', 'Jungle'],

    ['Labyrinth', 'Lair', 'Lake', 'Library', 'Lode', 'Lookout'],

    ['Manor', 'Mausoleum', 'Maze', 'Minaret', 'Mine', 'Monastery', 'Monolith', 'Monument', 'Mosque', 'Mound', 'Museum'],

    ['Narthex', 'Necropolis', 'Nest', 'Network', 'Nexus', 'Niche'],

    ['Oasis', 'Obelisk', 'Observatory', 'Orifice', 'Ossuary', 'Outcrop', 'Outpost', 'Overlook'],

    ['Palace', 'Parapet', 'Parish', 'Passage', 'Path', 'Pavilion', 'Peak', 'Penitentiary', 'Pile', 'Pillar', 'Pit', 'Plateau', 'Plaza', 'Portal', 'Precipice', 'Prison', 'Pylon', 'Pyramid'],

    ['Ramparts', 'Rapids', 'Ravine', 'Recess', 'Redoubt', 'Refuge', 'Reliquary', 'Reservoir', 'Rift', 'Rim', 'River', 'Road', 'Rock', 'Room', 'Roost', 'Ruins', 'Wreckage'],

    ['Cell', 'Cemetary', 'Cistern', 'Citadel', 'City', 'Sanctum', 'Sands', 'Scaffold', 'Sepulcher', 'Settlement', 'Sewer', 'Sill', 'Spire', 'Spring', 'Stadium', 'Stair', 'Storehouse', 'Stronghold', 'Substrate'],

    ['Tarn', 'Temple', 'Tomb', 'Tower', 'Trail', 'Trench', 'Trestle', 'Tunnels', 'Turret'],

    ['Undercroft', 'Underpass', 'University'],

    ['Vault', 'Vein', 'Vestibule', 'Vestry', 'Viaduct', 'Void', 'Volcano'],

    ['Wall', 'Ward', 'Waste', 'Watchtower', 'Weir', 'Well'],

    ['Chamber', 'Channel', 'Chantry', 'Charnel', 'Church'],

    ['Shaft', 'Shipwreck', 'Shore', 'Shrine']
]

// Swap whether the Generate button will pull from alliterative or non-alliterative name combinations.
function toggle() {
    if (outputMode === 1) {
        outputMode = 2;
        toggleButton.innerHTML = 'NO ILLITERATION'
    } else {
        outputMode = 1;
        toggleButton.innerHTML = 'ILLITERATION'
    }
}

function generate() {

    if (outputMode === 1) {
        let sameLetter = letterGen();
        descLetter = sameLetter;
        placeLetter = sameLetter;
        document.getElementById('current-letter').innerHTML = numToLetter(sameLetter);
    } else {
        descLetter = letterGen();
        placeLetter = letterGen();
        document.getElementById('current-letter').innerHTML = '';
    }

    descriptorGen();
    placeGen();
    
    console.log(descLetter, placeLetter);
}

function genByNewLetter(direction) {
    if (outputMode === 1) {
        if (direction == 'up') {
            descLetter++;
            placeLetter++;
        } else if (direction == 'same') {
            
        } else {
            descLetter--;
            placeLetter--;
        }
        descriptorGen();
        placeGen();
        document.getElementById('current-letter').innerHTML = numToLetter(descLetter);
    }
}

function descriptorGen() {
    let max = descList[descLetter].length;
    let num = Math.floor(Math.random() * max);
    descNum = num;
    descSelection = descList[descLetter][num];
    descOutput.innerHTML = descSelection;
}

function placeGen() {
    let max = placeList[placeLetter].length;
    let num = Math.floor(Math.random() * max);
    placeNum = num;
    placeSelection = placeList[placeLetter][num];
    placeOutput.innerHTML = placeSelection;
}

function letterGen() {
    return Math.floor(Math.random() * 23);
}

function numToLetter(num) {
    let alphabet = 'ABCDEFGHIJLMNOPRSTUVWQK';
    let innerLetter = alphabet[num];
    if (innerLetter === 'Q') {
        return 'CH';
    } else if (innerLetter === 'K') {
        return 'SH';
    } else {
        return innerLetter;
    }
}

// Right and left arrows

let descLeftArrow = document.getElementById('top-left-btn');
let descRightArrow = document.getElementById('top-right-btn');
let placeLeftArrow = document.getElementById('left-center-btn');
let placeRightArrow = document.getElementById('right-center-btn');

function arrowLeft(list) {
    let newList;
    if (list == 'desc') {
        if (descNum !== 0) {
            descNum--;
        }
        newList = descList[descLetter];
        descOutput.innerHTML = newList[descNum];
    } else {
        if (placeNum !== 0) {
            placeNum--;
        }
        newList = placeList[placeLetter];
        placeOutput.innerHTML = newList[placeNum];
    }  
}

function arrowRight(list) {
    let newList;
    let max;
    if (list == 'desc') {
        newList = descList[descLetter];
        max = newList.length;
        if (descNum < (max - 1)) {
            descNum++;
        }
        descOutput.innerHTML = newList[descNum];
    } else {
        newList = placeList[placeLetter];
        max = newList.length
        if (placeNum < (max - 1)) {
            placeNum++;
        }
        newList = placeList[placeLetter];
        placeOutput.innerHTML = newList[placeNum];
    } 
}

// Calculate total number of combinations
function count(list) {
    let total = 0;
    for(i = 0; i < list.length; i++) {
        let innerList = list[i];
        for(j = 0; j < innerList.length; j++) {
            total++;
        }
    }
    return total
}

let descTotal = count(descList);
let placeTotal = count(placeList);
let totalCombos = descTotal * placeTotal;
totalComboOutput.innerHTML = totalCombos;

// Populate subtitle fields

let subtitleDescOutput = document.getElementById('subtitle-desc');
let subtitlePlaceOutput = document.getElementById('subtitle-place');

let subtitleDescList = [
    ['Diminutive', "Dabbler's"],

    ['Little', 'Lightweight'],

    ['Miniature', 'Modest']
];

let subtitlePlaceList = [
    ['Dungeons'],

    ['Locations'],

    ['Maps']
];

function subtitleGen() {
    let num = Math.floor(Math.random() * 3);
    let coinToss = Math.floor(Math.random() * 2);
    let innerList = subtitleDescList[num];
    subtitleDescOutput.innerHTML = innerList[coinToss];
    subtitlePlaceOutput.innerHTML = subtitlePlaceList[num];
}

subtitleGen();