const button = document.getElementById("countButton");
const buttonRecarregar = document.getElementById("resetButton");
let letterCounts = {};
let letterCounts_palavras = {};
let currentLetter = {};
button.addEventListener("click", contaPalavra)
buttonRecarregar.addEventListener("click", recarregar)

function contaLetra() {

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    imprimeNaTela()
}

function contaPalavra() {

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    let palavra = typedText.split(" ");
    for (let i = 0; i < palavra.length; i++) {
        currentLetter = palavra[i];
        if (letterCounts_palavras[currentLetter] === undefined) {
            letterCounts_palavras[currentLetter] = 1;
        } else {
            letterCounts_palavras[currentLetter]++
        }
    }
    imprimeNaTelaPalavra()
    contaLetra()
}



function imprimeNaTela() {
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);

    }
}

function imprimeNaTelaPalavra() {
    for (let letter in letterCounts_palavras) {

        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts_palavras[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span);
    }
}

function recarregar() {
    document.getElementById("wordsDiv").innerHTML = " ";
    document.getElementById("lettersDiv").innerHTML = " ";
}