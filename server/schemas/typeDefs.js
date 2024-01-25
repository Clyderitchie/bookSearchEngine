const gql = String.raw;

module.exports = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Books {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query {
    getSingleUser(userId: ID): User
    getAllUsers: [User]
}

# type Mutation{}

`;