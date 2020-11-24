const gql = require('graphql-tag')

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        createdAt: Int!
    }

    type Settings {
        user: User!
        theme: String!
    }

    type Query {

    }

`