// let famousQuotes =  {
//     beginning: [
//         "The greatest glory in living lies not",
//         "The way to get started",
//         "Your time is limited",
//         "If life were predictable ",
//         "If you look at what you have in life you'll never have enough",
//         "If you set your goals ridiculously high ",
//         "Life is what happens when "
//       ],
//     middle: [
//         "in never falling, but in rising",
//         "is to quit talking",
//         "and begin doing.",
//         "Don't be trapped by dogma",
//         "you'll always have more",
//         "If you look at what you don't have in life",
//         "and it's a failure"
//     ],
//     end: [
//         "every time we fall.",
//         "which is living with the results of other people's thinking.",
//         "it would cease to be life",
//         "and be without flavor",
//         "you will fail above everyone else's success",
//         "so don't waste it living someone else's life.",
//         "you're busy making other plans."
//     ]
// };
// let marvelQuotes = {
//     beginning: [
//         "Compromise where you can, but where you can’t, don’t.",
//         "It is your duty to plant yourself like a tree,",
//         "doesn’t mean it can’t be improved.",
//         "That you will stay who you are. ",
//         "I can’t control their fear,",
//         "Losers… I mean like, folks who have lost stuff. ",
//         "It is giving us a chance."
//       ],
//     middle: [
//         "Even if everyone is telling you that something wrong is something right.",
//         "to look them in the eye and say, no, you move.",
//         "Whatever happens tomorrow,",
//         "Not a perfect soldier, but a good man.",
//         "only my own.",
//         "And you think life takes more than it gives,",
//         "It’s an imperfect world but"
//     ],
//     end: [
//         "Even if the whole world is telling you to move.",
//         "Just because something works, ",
//         "you must promise me one thing. ",
//         "I would rather be a good man",
//         "I look around at us and you know what I see? ",
//         "but not today. Today it’s giving us something.",
//         "Always has been. "
//     ]
// };
let quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.-Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon"]

function randomQuoteGenerator () {
    const randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomQuote];
}