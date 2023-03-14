const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/");
const { resolvers } = require("./resolvers/");

// The root provides a resolver function for each API endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
