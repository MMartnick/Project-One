document.addEventListener("DOMContentLoaded", function () {


    /*/ Variables for audio ------------------------------------
    var error = new Audio("assets/audio/error.mp3");
    var intro = new Audio("assets/audio/intro.mp3");
    var growl = new Audio("assets/audio/growl.mp3");
    var cursor = new Audio("assets/audio/cursor.mp3");
    var battle1 = new Audio("assets/audio/battle1.mp3");
    //var boss1 = new Audio("assets/audio/boss1.mp3");
    var fanfare = new Audio("assets/audio/fanfare.mp3");
    var enemyDeath = new Audio("assets/audio/enemyDeath.mp3"); */

    var currentScreen = document.getElementById("team-character-select");

    // Global variables
    var dude;
    var charCounter = 2;
    var killCount = 0;
    var enemySelected;
    var combatToggle;
    var selectToggle;
    var startToggle;
    var currentEnemy;
    var temperature;
    var charHealth;
    //var battleMusic = battle1;


    // Character function =========================================================
    function Character(first, last, health, strength, image) {
        this.firstName = first;
        this.lastName = last;
        this.health = health;
        this.strength = strength;
        this.imageUrl = image;
    }



    // Create character objects
    var cloud = new Character("Cloud", "Strife", 120, 16, "../images/cloudSml.png");
    var x = cloud;
    var golbez = new Character("Golbez", "Harvey", 142, 18, "../images/golbezSml.png");
    var y = golbez;
    var lulu = new Character("Lulu", null, 140, 15, "../images/luluSml.png");
    var z = lulu;

    // Array of characters
    var charList = [x, y, z];

    //==============================================================================

    // Renders character objects to the DOM - builds character card
    var renderCharacter = function (Character, renderArea) {

        var charDiv = document.createElement("DIV");
        charDiv.setAttribute("class", "character");
        charDiv.setAttribute("data-name", Character.firstName);
        renderArea.appendChild(charDiv);

        var charName = document.createElement("DIV");
        charName.innerText = Character.firstName;
        charName.setAttribute("class", "character-name");
        charDiv.appendChild(charName);

        var charImage = document.createElement("IMG");
        charImage.setAttribute("src", Character.imageUrl.toString());
        charImage.setAttribute("class", "character-image");
        charImage.setAttribute("alt", "image");
        charDiv.appendChild(charImage);

        renderArea.appendChild(charDiv);
    };

    //==============================================================================
    //==renderCharacter(Character, currentScreen);


    // Loops through charList to populate the character select screen 
    for (i = 0; i < charList.length; i++) {
        renderCharacter(charList[i], currentScreen);
    }
    //==============================================================================

    var charObj;
    document.getElementsByClassName('character').onclick = function updateCharacter() {



        if (currentScreen = document.getElementById("team-character-select")) {
            charObj = document.getElementsByClassName('character');
            updateCharacter();
            console.log(charObj);
            selectedSection = document.getElementById("selected-characters");
            renderCharacter(charObj, selectedSection);

        }
    };
    selectedSection = document.getElementById("selected-characters");
    renderCharacter(cloud, selectedSection);
    cloud.onclick = function () {
        console.log("yo");
    }

});





/*

// function for selecting characters
$("#team-character-select").on("click", ".character", function () {
    // Saving the clicked character's name.
    dude = $(this).attr("data-name");
    console.log(dude);

    if (charCounter > 0) {
        charCounter = charCounter - 1;
        updateCharacter(characters[dude], "#selected-characters");
        updateCharacter(characters[dude], "#player-section");
        renderInfo(characters[dude], ".character-menu");
        console.log(characters[dude]);
        renderMoveSet(dude, ".moveset-container");
        $(this).hide();
        $("#char-select").show();
        console.log("this is where I create a button" + characters[dude].name);
        cursor.play();
    } else {
        error.play();
    }
});

function updateCharacter(charObj, areaRender) {
    // $(areaRender).empty();
    console.log(charObj);
    renderCharacter(charObj, areaRender);
    */