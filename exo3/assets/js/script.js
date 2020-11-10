let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let phrase = 'Les différents languages de programmation que nous allons apprendre sont : ';

let div = document.querySelector('div');
console.log(languages.length);

for(i=0; i < languages.length; i++){
    // pour les index inférieur au dernier index, on met une , et pour le dernier on met un point
    if(i === languages.length - 1){
        phrase += languages[i] + '. ';

    } else {
        phrase += languages[i] + ', ';
    }

};

div.innerHTML = phrase;

