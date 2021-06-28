const { ApolloServer, gql } = require("apollo-server");

class Deck {
  cards = [];
  // new = [];

  constructor() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const symbols = ["♣", "♦", "♥", "♠"];
    symbols.map((symbol) => {
      numbers.map((number) => {
        this.cards.push({ number, symbol });
      });
    });
  }

  fetchCards(size) {
    return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
      );
  }

  // fullDeck() {
  //   this.suits.map((suit) => {
  //     this.numbers.map((face) => {
  //       this.new.push(face + suit);
  //     });
  //   });
  //   return this.new;
  // }
}


const typeDefs = gql`
  type Card {
    number: String
    symbol: String
  }
  type User {
    uid: String
    name: String
    email: String
  }
  type Query {
    cards: [Card]
    getCards(cards: Int): [Card]
    game: [Card]
    newDeck: [Card]
    getUsers: [User]
  }

  type Mutation {
    restoreCards: String
    addUser(name: String, email: String): [User]
  }
`;

const users = require("./users.json");
let deck = new Deck();
const game = deck.fetchCards(5);
const full = new Deck();

const resolvers = {
  Query: {
    cards: () => deck.cards,
    game: () => game,
    getCards: (_, { cards }) => deck.fetchCards(cards),
    newDeck: () => full.cards,
    getUsers: () => [User],

  },
  Mutation: {
    restoreCards: () => {
      deck = new Deck();
      // newDeck = new Deck();
      game = deck.fetchCards(5);
      return `Ok!`;
    },
    addUser: (_, { name, email }) => {
      if (!!users.find((user) => user.email === email)) {
        console.log("User is already in database");
      } else {
        users.push({
          uid: "jsfos789siofd",
          name,
          email,
        });
      }
      return users;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
