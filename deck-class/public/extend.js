const createCardDiv = (symbol, number) => {
    const htmlCardDiv = document.createElement('div');
    htmlCardDiv.setAttribute('symbol', symbol);
    htmlCardDiv.setAttribute('number', number);
    return htmlCardDiv;
}

const createCardFront = (content) => {
    return `<div class="front">${content}</div>`;
}

const createCardCorner = (number, symbol, side) => {
    return `<div class="card-corner ${side}">
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

    if (['J', 'Q', 'K'].includes(number)) {
        symbols = (`<div class="image"></div>`);
    }

    if (isNumber) {
        symbols = `${new Array(parseInt(number)).fill(symbol).map((cardSymbol) => `
            <div>${cardSymbol}</div>
            `).join('')}`;
    }

    return `<div class="symbols">${symbols}</div>`;
    /* <div class="qty qty-${number}>${cardSymbol}</div> */
}

const createCardBack = () => {
    return `<div class="back"></div>`;
}

const createCard = (card, turned) => {
    const number = card.slice(0, -1);
    const symbol = card.slice(-1);
    const cardDiv = createCardDiv(symbol, number);
    console.log(`It worked! ${cardDiv}`);
    cardDiv.innerHTML = `<div class="container">
            ${createCardFront(`
                ${createCardCorner(number, symbol, "top-left")}
                ${createCardSymbol(number, symbol)}
                ${createCardCorner(number, symbol, "down-right")}
            `)}
            ${createCardBack()}
                        `;

    cardDiv.addEventListener('click', () => {
        if (cardDiv.classList.contains('turned')) {
            cardDiv.classList.remove('turned');
        } else {
            cardDiv.classList.add('turned');
        }
    });

    if (turned) {
        cardDiv.classList.add('turned');
    }
    // console.log(cardDiv);
    return cardDiv;
}

const createDeck = async ({ selector, path, turned }) => {
    const container = document.querySelector(selector);
    const cards = await (await fetch(path)).json();
    cards.forEach((card, index) => container.append(createCard(card, (index < turned))));
}

const onClickElementId = (id, callback) => {
    document.getElementById(id).addEventListener('click', callback);
}


window.addEventListener('load', function () {
    (async () => {
        await createDeck({
            selector: '.deck',
            path: '/deck',
            turned: 0
        });

        // await createDeck({
        //     selector: '.deck.table',
        //     path: '/table',
        //     turned: 2
        // });

        // const cardSize = parseInt(2);
        // await createDeck({
        //     selector: '.deck.hand',
        //     path: `/deck/${cardSize}`,
        //     turned: cardSize
        // });

        onClickElementId('turn-cards', () => {
            document.querySelectorAll('.deck.hand .card')
                .forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.remove('turned');
                    }, (500 * (index)));
                });
        })
    })()
});