const contestants = ['@sofiaortiz00', '@claritaa_prp', '@sabrisoletesta', '@natidominguezm', '@lore_ludi', '@naii_ci00', '@loourdesbustos', '@priscillamurgag', '@girileonela', '@sofiareyess__', '@chipachota', '@pri_nails02', '@priscila.sarmiento02', '@miayel1', '@winx.girl999', '@ramirezmartina86', '@daniigonzalez152', '@adeeline09', '@melina_moschen', '@noelia.milena', '@lupe.ch13', '@_flormandon', '@bren._.riquelme', '@milagrosmok', '@luulee_381', 
];
let firstTime = true;

const winnerButton = document.querySelector('button');
const winnerName = document.querySelector('.winner');
const winnersList = document.querySelector('.winners-list');

const pickAWinner = () => {
const winningNumber = Math.floor(Math.random() * contestants.length);
 const winner = contestants[winningNumber];
return winner;   }

const numberOfEntries = contestants.length;

winnerButton.addEventListener('click', () => {
    // Deshabilitar el botón mientras se está ejecutando el temporizador
    winnerButton.disabled = true;

    // Llamar a la función pickAWinner después de 5 segundos
    setTimeout(() => {
        const winner = pickAWinner();
        winnerName.textContent = winner;
        updateWinnersList(winner);

        // Habilitar el botón después de que se haya completado el temporizador
        winnerButton.disabled = false;
    }, 6000); // 5000 milisegundos = 5 segundos
});

function iniciarTemporizador() {
    var tiempoRestante = 5; // en segundos
    var btn = document.getElementById('countdownBtn');
    var winnerText = document.querySelector('.winner');

    // Deshabilitar el botón durante el temporizador
     btn.disabled = true;

    // Actualizar visualmente la cuenta regresiva cada segundo
    var temporizadorVisual = setInterval(function() {
        btn.textContent = ' ' + tiempoRestante + '';

        if (tiempoRestante <= 0) {
            // Habilitar el botón al finalizar el temporizador
            btn.textContent = 'Sortear';
            btn.disabled = false;
                
            
            clearInterval(temporizadorVisual); // Detener el temporizador visual
        } else {
            tiempoRestante--;
        }
     }, 1000);
}


const updateWinnersList = (winner) => {
    const listItem = document.createElement('li');
    listItem.textContent = winner;
    winnersList.appendChild(listItem);
};





