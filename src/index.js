const express = require('express');
const quotesData = require('./data/quotes');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the LotR Quotes API",
        endpoints: [
            { path: "/", description: "Lists all available endpoints." },
            { path: "/characters", description: "Returns a list of available characters." },
            { path: "/quotes/:character", description: "Returns quotes from a specific character (e.g., /quotes/gandalf)." },
            { path: "/random", description: "Returns a random quote from a random character." }
        ]
    });
});

app.get('/characters', (req, res) => {
    const characters = Object.keys(quotesData).map(name => name.charAt(0).toUpperCase() + name.slice(1));
    res.json(characters);
});

app.get('/quotes/:character', (req, res) => {
    const character = req.params.character.toLowerCase();
    const quotes = quotesData[character];

    if (quotes) {
        res.json({ character, quotes });
    } else {
        res.status(404).json({ error: "Character not found. We enlisted only theoden, bilbo, gandalf, and sam, for now." });
    }
});

app.get('/random', (req, res) => {
    const characters = Object.keys(quotesData);
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    const quotes = quotesData[randomChar];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.json({
        character: randomChar.charAt(0).toUpperCase() + randomChar.slice(1),
        quote: randomQuote
    });
});

module.exports = app;
