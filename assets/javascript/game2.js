document.addEventListener("DOMContentLoaded", function () {


    var currentScreen = document.getElementById("team-character-select");


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
    var charList = [x, y, z ]; 

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
});
