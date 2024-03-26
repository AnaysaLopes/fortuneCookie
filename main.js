// Variáveis
const phrases = [
    "A persistência é a chave para alcançar seus sonhos.",
    "Não desista, pois a jornada rumo aos seus objetivos é recompensadora.",
    "Acredite em si mesmo e na sua capacidade de superação.",
    "A vida é uma jornada de descobertas e aprendizados.",
    "Transforme seus desafios em oportunidades de crescimento.",
    "Tenha fé e confiança no processo da vida.",
    "Seja a luz que ilumina o seu próprio caminho.",
    "Acredite na magia dos seus sonhos e os transforme em realidade.",
    "Cada pequeno passo é um progresso em direção aos seus objetivos.",
    "A verdadeira força reside na sua determinação inabalável.",
    "Encontre a paz interior para enfrentar os desafios da vida.",
    "Acredite na sua capacidade de criar o futuro que deseja.",
    "Liberte sua mente e permita-se voar além das limitações impostas.",
];

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phraseDisplay = screen2.querySelector("h2");
const buttonCookie = document.querySelector(".buttonCookie");
const tryAgainButton = document.getElementById("tryAgain");

// Eventos
function chooseRandomPhrase() { 
    const randomIndex = Math.floor(Math.random() * phrases.length); 
    return phrases[randomIndex]; 
}

buttonCookie.addEventListener("click", function(event) {
    event.preventDefault();
    screen2.classList.remove("hide");
    screen1.classList.add("hide");
});

tryAgainButton.addEventListener("click", function(event) {
    event.preventDefault();
    screen2.classList.add("hide");
    screen1.classList.remove("hide");
    phraseDisplay.textContent = chooseRandomPhrase();
});

// Funções
phraseDisplay.textContent = chooseRandomPhrase();
