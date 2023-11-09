const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Define your GraphQL schema
const typeDefs = gql`
  type Student {
  
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello, World!',
    },
};

// Create an Apollo Server instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Create an Express app
const app = express();

// Apply the Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Set the port for the server
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
