const { buildSchema } = require("graphql");

const authorSchema = buildSchema(` 
type Author { 
  id: ID!
  name: String!
  phoneNo: String!
}
input AuthorInput { 
  name: String!
  phoneNo: String!
}
type Query { 
  getById(id: ID!): Author
  getAll: [Author]
}
type Mutation { 
  createAuthor(authorInput: AuthorInput): Author
  deleteAuthor(id: ID!): Author
  updateAuthor(id: ID!, authorInput: AuthorInput): Author!
}
schema { 
  query: Query
  mutation: Mutation
}
`);

module.exports = authorSchema;
