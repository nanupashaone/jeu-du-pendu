const lettresADeviner = document.querySelectorAll('#mot span');
const mauvaisesLettres = document.getElementById('wrong');
const inputLettre = document.querySelector('input');
const boutonRestart = document.getElementById('btn');
const alphabetButtons = document.querySelectorAll('#alphabet button');
const messageBienJoue = document.getElementById('good');
const messagePasLoin = document.getElementById('wrong');

const mots = ['abeille', 'bateau', 'cactus', 'danse', 'école', 'fée', 'gare', 'hibou', 'igloo', 'jardin', 'koala', 'lune', 'magie', 'nuage'];

const motSecret = mots[Math.floor(Math.random() * mots.length)];

let secretWord = motSecret.split('');

let lettresTrouvees = new Set();
let lettresIncorrectes = new Set();

function initialiserJeu() {
    
}

function verifierLettre(lettre) {
    
}

boutonRestart.addEventListener('click', initialiserJeu);

window.addEventListener('keypress', (event) => {
    const lettre = event.key.toUpperCase();
    if (/[A-Z]/.test(lettre)) {
        verifierLettre(lettre);
    }
});

alphabetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lettre = button.textContent;
        verifierLettre(lettre);
    });
});

initialiserJeu();

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    
    console.log(secretWord);
});
