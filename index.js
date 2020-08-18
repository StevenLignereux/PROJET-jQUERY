
// On stocke notre div dans une vairable
var bg = $("#particles-js");

$(document).keydown(function() {
    
    // Lors de l'appuye sur une touche du clavier on appel la focntion getRandColor pour lui donner une couleur
    $(bg).css("background-color", getRandomColor);

});

function getRandomColor() {

    // Toutes les lettres d'un code hexadécimale
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    // On boucle afin de donner une valeur aléatoire à notre variable color
    for (var i = 0; i < 6; i++) {
        
        color+= letters[Math.floor(Math.random() * 16)];

    }

    return color;
}