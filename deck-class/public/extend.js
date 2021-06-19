const createCardDiv = (attributes) => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('symbol', symbol);
    cardDiv.setAttribute('number', symbol);
    return cardDiv
}

const createCardFront = (content) => {
    return `<div class="front>${content}</div>`;
}

const createCardCorner = (number, symbol) => {
    return `<div class="card-corner">
    <div>${number}</div>
    <div>${symbol}</div>
    </div>`;
}


const createCardSymbol = (number, symbol) => {
    let symbols = '';
    const isNumber = !isNaN(number);

    if (number === 'A') {
        symbols = (`<div>${symbol}</div>`);
    }

    if (number === ['J', 'Q', 'K'].includes(number)) {
        symbols = (`<div class="image">${symbol}</div>`);
    }

    if (isNumber) {
        symbols = `${new Array(parseInt(number))
            .fill(symbol)
            .map((cardSymbol) => `
            <div class="qty qty-${number}>${cardSymbol}</div>
        `)
            .join('')
            }`;
    }
    return `<div class="symbols">${symbol}</div>`;

}
const createCardBack = () => {
    return `<div class="back"></div>`;
}

const createCard = (number, flipped) => {
    const number = card.slice(0, -1);
    const symbol = card.slice(-1)
    const cardDiv = createCardDiv({ symbol, number });

    cardDiv.innerHTML = `
    <div class="container">
        ${createCardFront(`
            ${createCardCorner(number, symbol)}
            ${createCardSymbol(number, symbol)}
            ${createCardCorner(number, symbol)}
        `)}
        ${createCardBack()}
    <div/>
    `;

    cardDiv.addEventListener('click', () => {
        if (cardDiv.classList.contains('turned')) {
            cardDiv.classList.remove('turned');
        } else {
            cardDiv.classList.add('turned');
        }
    });

    if (turned)

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