var fakeDatabase = {};
const resolvers = {
  hello: async () => {
    return "Hello world!!";
  },

  setMessage: ({ message }) => {
    fakeDatabase.message = message;
    return message;
  },
};

module.exports = {
  resolvers,
};
