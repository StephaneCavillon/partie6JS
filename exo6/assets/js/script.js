// Création des variables
let firstNumber = prompt('Donner un premier chiffre entre 1 et 100');
let secondNumber = prompt('Donner un second chiffre entre 1 et 10');
let div = document.querySelector('div');

// Création de la boucle
while(firstNumber > 1){
    firstNumber /= secondNumber;
    div.innerHTML += '<div>' + firstNumber + '</div>';
};