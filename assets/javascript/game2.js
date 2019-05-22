document.addEventListener("DOMContentLoaded", function () {


    var currentScreen = document.getElementById("character-select-screen");

    function Character(first, last, health, attack, image) {
        this.firstName = first;
        this.lastName = last;
        this.health = health;
        this.attack = attack;
        this.imageUrl = image;
    }

    // Create character objects
    var cloud = new Character("Cloud", "Strife", 120, 16, "../images/cloudSml.png");
    
    var Character = cloud;

    var renderCharacter = function (Character, renderArea) {

        var charDiv = document.createElement("DIV");
        charDiv.setAttribute("class", "character");
        charDiv.setAttribute("data-name", Character.firstName);
        renderArea.appendChild(charDiv);

        var charName = document.createElement("P");
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

    renderCharacter(Character, currentScreen);
    
});

//document.createElement("DIV").createAttribute("class", "new");
//document.getElementById("team-character-select").innerHTML = Character.imageUrl;
//document.getElementById("character-select-screen").innerHTML = imgPop();
//document.getElementById("team-character-select").innerHTML = charDiv+ " " + charImage+ "."; 




// renders all characters to the DOM
// function renderCharacter(character, renderArea) {

// this block of code builds the character card, and renders it to the page.



//var charHealth = $("<div class='character-health'>").text(character.health);
//charDiv.appendChild(charImage); //.append(charHealth);
//};


//renderCharacter(Character, document.getElementById("team-character-select"));