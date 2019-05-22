document.addEventListener("DOMContentLoaded", function () {


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

    var charDiv = document.createElement("div").setAttribute("class", "character") /*.setAttribute("data-name", Character.firstName)*/ ;
    //var charImage =  document.createElement("IMG").setAttribute("alt", "image").setAttribute("class", "character-image").setAttribute("src", Character.imageURL);

    //function imgPop() {

        var x = document.createElement("IMG");
        x.setAttribute("src", Character.imageUrl.toString());
        x.setAttribute("class", "character-image character");
        x.setAttribute("alt", "image");
        document.getElementById("character-select-screen").appendChild(x);
    //};

    charDiv;
    
    document.createElement("div").setAttribute("class", "character");
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


});