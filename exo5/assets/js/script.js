// Création des variables
let firstNumber = prompt('Donner un premier chiffre entre 1 et 10');
let secondNumber = prompt('Donner un second chiffre entre 1 et 10');
let div = document.querySelector('div');

// Création de la boucle
while(secondNumber < 250){
    secondNumber *= firstNumber;
    div.innerHTML += '<div>' + secondNumber + '</div>';
};