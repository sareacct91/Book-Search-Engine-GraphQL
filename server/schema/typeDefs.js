const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID
    authors: [String]
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(_id: String!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, title: String!, authors: [String], image: String, link: String): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
