let hour  = document.getElementById('hours');
let minute = document.getElementById('minutes');
let seconde = document.getElementById('seconde');
let button = document.getElementById('envoi');
let compteur = document.getElementById('compteurs');

let i = 0;
let hours = hour.value;
let minutes = minute.value;
let seconds = seconde.value;

function timerCreate () {
    let divCompteur = document.createElement('div');
    compteur.appendChild(divCompteur);
    divCompteur.id = "'" + "compteur" + i + "'";
    console.log(hour.value + " h " + minute.value + " min " + seconde.value + " s ");
    divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";

    countDown();
    i++;
}

let countDown = function() {
    let num = i;
    let identifiant = document.getElementById("compteurs"+num);
    seconds--;

    let chrono = setTimeout(function (){

        if (seconds > 0) {
            identifiant.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
            seconds--;
            countDown();
        }
        else if (seconds === 0){
            minutes--;
            seconds = 59;

            identifiant.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";

            countDown();
        }
    }, 1000);

    document.getElementById('stop-button').addEventListener('click', function (){
        clearTimeout(chrono);
    })
};

button.addEventListener('click', timerCreate);