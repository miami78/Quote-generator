import quotes from "./quotes.js";

function randomQuoteGenerator () {
    let randomQuote;
    for (let i = 0; i < quotes.length; i += 1) {
		randomQuote = Math.floor(Math.random() * quotes[i].length);
}
    return randomQuote;
}

const btnQuoteGenerator = document.querySelector('#quote-generator');

btnQuoteGenerator.addEventListener('click', () => {
    document.getElementById('quotes').innerHTML = quotes[0][randomQuoteGenerator()];
    console.log(quotes[0][randomQuoteGenerator()]);
});