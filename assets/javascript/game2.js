function battleUpdate() {

    $(this).hide();;
    setTimeout(function () {
        $(this).show();
    }, 10000);
    setTimeout(battleUpdate, 13000);

}

setTimeout(battleUpdate, 3000);

$(this).hide();
$("#char-select").show();

// renders character moveSet to the DOM
var renderMoveSet = function (character, renderArea) {

    $(this).hide();
    setTimeout(function () {
        $(this).show();
    }, 10000);

    var attack1 = $("<button>");
    //class='combat-attack'  data-type='"+character+"'>");
    attack1.addClass("combat-attack");
    attack1.attr("data-type", character);
    attack1.text(character);
    // variable for testing to see that the character data renders a distinct button
    var attackData = attack1.attr("data-type");
    console.log(attackData);

    $(renderArea).append(attack1);

    // cure button render
    var heal1 = $("<button>");
    heal1.addClass("combat-heal");
    heal1.attr("data-heal", character);
    heal1.text("Cure");
    // variable for testing to see that the character data renders a distinct button
    var healData = heal1.attr("data-heal");
    console.log(healData);

    $(renderArea).append(heal1);

    $(this).click(hide());

    /*		moveSet: {
            attack: 12,
            heal: 26,
            jump: 16,
            skill: {
                lancet: 20,
                tornado: 27
            },
            defend: 0,
        }
    */
};


// New rendering structure =================================================================================================================

function Character(HP, MP, ATK, DEF, SPD, MND, INT, skills, imageUrl) {

}


// Character vairables
var kain = new Character(142, 55, 12, 15, 4000, 4, 7, moveSet = (attack, heal, jump, lance), "assets/images/kainSml.png");

// Skills

var attack = $("<button>");
//class='combat-attack'  data-type='"+Character+"'>");
attack.addClass("combat-attack");
attack.attr("data-type", Character);
attack.text(Character);
attack.value(10);
// variable for testing to see that the Character data renders a distinct button
var attackData = attack.attr("data-type");
console.log(attackData);

$(renderArea).append(attack);


// cure button render
var heal = $("<button>");
heal.addClass("combat-heal");
heal.attr("data-heal", Character);
heal.text("Cure");
heal.value(10 + Character.MND);
// variable for testing to see that the Character data renders a distinct button
var healData = heal.attr("data-heal");
console.log(healData);

$(renderArea).append(heal1);

$(".moveset-container").on("click", ".combat-heal", function () {
    var playerName = $(this).attr("data-heal");
    console.log(playerName, "Yo");
    // creates messages for our attack and our opponents counter attack
    // var attackMessage = Characters[playerName].name + "gained" + Characters[playerName].moveSet.heal + " HP.";
    var healUp = Character[playerName].moveSet.heal + Characters[playerName].health;
    console.log(healUp);
    //clearMessage();
});

// Reduce your attack health by the opponents attack value.
Characters[playerName].health -= enemyAttackLevel;
console.log(Characters[playerName]);
console.log(Characters[playerName].health);

var charHealth = $("<div class>").text(Characters[playerName].health);
$(".Character-name-menu").append(charHealth);



var jump = $("<button>");
jump.addClass("combat-jump");
jump.attr("data-jump", Character);
jump.text("Jump");
// variable for testing to see that the Character data renders a distinct button
var jumpData = jump.attr("data-jump");
console.log(jumpData);

$(renderArea).append(jump);

var lance = $("<button>");
lance.addClass("combat-lance");
lance.attr("data-lance", Character);
lance.text("lance");
// variable for testing to see that the Character data renders a distinct button
var lanceData = lance.attr("data-lance");
console.log(lanceData);

$(renderArea).append(lance);