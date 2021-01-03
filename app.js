let hour  = document.getElementById('hours');
let minute = document.getElementById('minutes');
let seconde = document.getElementById('seconde');
let button = document.getElementById('envoi');
let compteur = document.getElementById('compteurs');

let Truc = function (heure, minute, seconde){
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;

}

function timerCreate () {
    let i = 0;
    let hours = hour.value;
    let minutes = minute.value;
    let seconds = seconde.value;

    let divCompteur = document.createElement('div');

    divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
    compteur.appendChild(divCompteur);
    divCompteur.id = "'" + "compteur" + i + "'";

    let countDown = function() {
        let chrono = setTimeout(function (){
            if (minutes === 0 && hours === 0 && seconds === 0){
                divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
            }
            else if (seconds > 0) {
                divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
                seconds--;
                countDown();
            }
            else if (seconds === 0){
                minutes--;
                seconds = 59;
                divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
                countDown();
                if (minutes === 0 && hours > 0){
                    minutes = 59;
                    seconds = 59;
                    hours--;
                    divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
                    countDown();
                }
                else if (minutes === 0 && hours === 0){
                    seconds = 59;
                    divCompteur.innerHTML = hours + " h " + minutes + " min " + seconds + " s ";
                    countDown();
                }
            }

        }, 1000);
        document.getElementById('stop-button').addEventListener('click', function (){
            clearTimeout(chrono);
        })
    };

    countDown();
    i++;

}

button.addEventListener('click', timerCreate);