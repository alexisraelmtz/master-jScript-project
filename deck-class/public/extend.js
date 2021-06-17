const createCard = (number, symbol) => {
    const cardDiv = document.createElement('div');
    // const isNumber = !isNaN(number);
    cardDiv.classList.add('card');
    cardDiv.setAttribute('symbol', symbol);
    cardDiv.setAttribute('number', symbol);

    cardDiv.innerHTML = `<div class="card-corner top-left">
            <div>${number}</div>
            <div>${symbol}</div>
        </div>
        <div class="symbols">
            ${(isNumber) ? `${new Array(parseInt(number))
            .fill(symbol)
            .map((cardSymbol) => `
            <div></div>
            `)
            .join('')
            }` : ''}
        </div>
        <div class="card-corner bottom-right">
            <div>${number}</div>
            <div>${symbol}</div>
    </div>
    `;

    return (cardDiv);
}

window.addEventListener('load', function () {
    const container = document.querySelector('.deck');
    (async () => {
        const { cards } = await (await fetch('/deck')).json();

        cards.forEach((card) => {
            const number = json[0].slice(0, -1);
            const symbol = json[0].slice(-1);

            container.append(createCard(number, symbol));
        });
    })();
});

// async () => {
//     const fetchDeck = await fetch("http://localhost:/")
//         .then(data => data.json());
//     console.log(fetchDeck);
//     const deckValues = await Object.values(fetchDeck["cards"])
//     const unassignedCards = await showDeck(deckValues)
//     const players = await showHand(fetchDeck)
//     document.getElementById("deck").innerHTML = unassignedCards
//     document.getElementById("players-section").innerHTML = players
// }, false);

