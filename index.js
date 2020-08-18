
// On stocke notre div dans une vairable
var bg = $("#particles-js");

$(document).keydown(function() {
    
    // Lors de l'appuye sur une touche du clavier on appel la focntion getRandColor pour lui donner une couleur
    $(bg).css("background-color", getRandomColor);

});

// Afficher le nom de l'artiste
$(".img").click(function () { 

    //On réccupère l'attribut nom de nos balises images que l'on passe dans notre titre
    var name = $(this).attr("name");

    // On modifie la première lettre du nom afin de la transformée en majuscule
    const initiale = name.charAt(0).toUpperCase();
    // On concatène l'initale avec notre chaine de caractère moins l'initale
    const namedCapitalized = initiale + name.slice(1);

    $("#titre").text(namedCapitalized);

    // Activation de l'animation de rebond prévue en css
    $(this).toggleClass("flash");

    // Jouer la musique correspondate à l'image cliquée
    var music = $(this).attr("name") + ".mp3";

    playMusic(music);

});

function playMusic(music) {
    
    // On créer un nouvel objet audio
    var audio = new Audio(music);

    // On utilise sa méthode play
    audio.play();
    
}

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