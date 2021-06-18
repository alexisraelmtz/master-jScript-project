const createCard = (number, symbol) => {
    const isNumber = !isNaN(number);
    const cardDiv = document.createElement('div');

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
                <div>${cardSymbol}</div>
            `)
            .join('')
            }` : ''}
    </div>
    <div class="card-corner bottom-right">
        <div>${number}</div>
        <div>${symbol}</div>
    </div>`;
    return (cardDiv);
}

window.addEventListener('load', function () {
    (async () => {
        const cards = await (await fetch('/deck')).json();
        const container = document.querySelector('.deck');
        // console.log(cards)
        // debugger
        cards.forEach((card) => {
            const number = card.slice(0, -1);
            const symbol = card.slice(-1);

            container.append(createCard(number, symbol));
        });
    })();
});

