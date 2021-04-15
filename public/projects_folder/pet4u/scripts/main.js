// Global vars
const cardsDiv = $(".cards");
const cardMockup = $(".mockup");
const optionMockup = $("#initial-option");
const animalSelect = $("#animal-choice");
const textarea = $("textarea");

// Functions
function populateAnimalCards() {
    for (const animal of animalsArray) {
        const newCard = cardMockup.clone(); //clone it
        newCard.removeClass("mockup"); // remove the mockup because else it is ugly
        newCard.find("img").prop("src", animal.picture); // inject image
        newCard.addClass(animal.type); //class add for sorting
        newCard.find("h5").text(animal.name); // inject name
        cardsDiv.append(newCard); //append the card to the div
    };
    cardMockup.remove();
};

function populateOptionList() { //get all the names into the list
    for (const animal of animalsArray) {
        const newOption = optionMockup.clone();
        newOption.prop("value", animal.name);
        newOption.text(animal.name);
        animalSelect.append(newOption);
    }
};

function attachEventListeners() { //function to have a clean part for event listeners
    $("form").on("submit", formValidation);
    textarea.on("keyup", resetTextAreaBorder);
    animalSelect.on("click", resetAnimalSelectBorder);
    $("figure img").on("click", sortAnimals);
};

function formValidation() { //form validation is simple and ugly but corresponds to what is asked
    event.preventDefault();
    let textareaContent = textarea.val().toString();
    let chosenAnimal = animalSelect.val();
    if (chosenAnimal === "nothing" && textareaContent.length <= 40) {
        textarea.css("border", "1px solid red");
        animalSelect.css("border", "1px solid red");
    } else if (chosenAnimal === "nothing") {
        animalSelect.css("border", "1px solid red");
    } else if (textareaContent.length <= 40) {
        textarea.css("border", "1px solid red");
    } else {
        $("form").html("Success :-)");
    }
};

function resetTextAreaBorder() { // function to reset border 
    textarea.css("border", "groove lightgrey");
};

function resetAnimalSelectBorder() { // same then before
    animalSelect.css("border", "groove lightgrey");
};

function sortAnimals() {
    //color for the chosen item based on border: 4px solid $main_color = #1e3799
    $("figure img").css("border", "4px solid #1e3799");
    $(this).css("border", "4px solid red");
    //Selecting card types
    const dogCard = $(".dog");
    const catCard = $(".cat");
    const horseCard = $(".horse");
    const rabbitCard = $(".rabbit");
    //hiding all at the start
    catCard.hide(500);
    horseCard.hide(500);
    rabbitCard.hide(500);
    dogCard.hide(500);
    switch (this.alt) {
        case "Dog":
            catCard.hide(500);
            horseCard.hide(500);
            rabbitCard.hide(500);
            dogCard.show(500);
            break;
        case "Cat":
            horseCard.hide(500);
            rabbitCard.hide(500);
            dogCard.hide(500);
            catCard.show(500);
            break;
        case "Horse":
            catCard.hide(500);
            rabbitCard.hide(500);
            dogCard.hide(500);
            horseCard.show(500);
            break;
        case "Rabbit":
            catCard.hide(500);
            horseCard.hide(500);
            dogCard.hide(500);
            rabbitCard.show(500);
            break;
        default:
            break;
    };
};

// Run on script load
populateAnimalCards();
populateOptionList();
attachEventListeners();