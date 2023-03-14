const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String): String
  }
`);

module.exports = {
  schema,
};
