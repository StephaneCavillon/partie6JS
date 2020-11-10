// Création du lien pour la div
let div = document.querySelector('div');

// Création de la boucles pour l'affichage des années
for(let i = 2020; i <= 2030; i++) {
        
    // Création de la règle pour les années bisextiles
    if(i % 4 == 0 && i % 100 !== 0 || i % 400 == 0){
        // on reprend le contenu precedent et on vient lui ajouter une div de couleur avec la nouvelle valeur
        div.innerHTML = div.innerHTML + '<div style="color: red">' + i + '</div>';
    } else {
        div.innerHTML = div.innerHTML + '<div style="color: black">' + i + '</div>';
    };

};