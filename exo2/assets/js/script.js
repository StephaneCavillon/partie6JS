// Création du lien pour la div
let div = document.querySelector('div');

// Création de la boucles pour l'affichage des nombres
for(let i = 0; i <= 100; i++) {
        
    // Création de la règle pour les multiples de 15
    if(i % 15 == 0){
        // on reprend le contenu precedent et on vient lui ajouter une div avec la nouvelle valeur
        div.innerHTML = div.innerHTML + '<span> ... </span>';
    } else {
        div.innerHTML = div.innerHTML + '<span>' + i + '</span>';
    };

};