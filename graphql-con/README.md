
### Read Later

https://nextjs.org/docs/basic-features/data-fetching



#### Commands to Install 
mkdir graphql-server
cd graphql-server
npm init
yarn add apollo-server graphql
const { ApolloServer, gql } = require('apollo-server');


#### Script 
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, args) => {
      console.log(args);
    }
  }
};


#### Add to BackEnd
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


#### How to name it 
server.js
database.js
index.js
node {}.js


import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});
const tableQuery = gql`
...
const getCardsQuery = gql`
....
const tableData = await client.query({
  query: tableQuery
});
const handData = await client.query({
  query: getCardsQuery,
  variables: {
    cards: 2
  },
  fetchPolicy: 'no-cache'
});



#### Installation on Next ONLY
npm i @apollo/client



#### Docs.
