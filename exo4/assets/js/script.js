let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let div = document.querySelector('div');

for(i=0; i < days.length; i++){
    // pour les Samedi et Dimanche on met en gras
    if(days[i] === 'Samedi' || days[i] === 'Dimanche'){
        div.innerHTML += '<div style="font-weight: bold">' + days[i] + '</div>';

    } else {
        div.innerHTML += '<div>' + days[i] + '</div>';
    }

};