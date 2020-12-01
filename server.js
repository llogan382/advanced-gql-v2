
const {ApolloServer} = require('apollo-server')
const gql = require('graphql-tag')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        createdAt: Int
    }

    type Settings {
        user: User!
        theme: String!
    }

    input NewSettingsInput {
        user: ID!
        theme: String!
    }

    type Query {
        me: User
        settings(user: ID!): Settings!
    }

    type Mutation {
        settings(input: NewSettingsInput!): Settings!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                id: '2345234',
                username: 'Coder12',
                createdAt: 413578123
            }
        },
        settings(_, {user}){
            return {
                user,
                theme: 'Light'

            }
        }
    },
    Mutation: {
        settings(_, {input}){
            return input
        }
    },

    Settings: {
        user(settings){
            return {
                id: 1,
                username: 'Coder12',
                createdAt: 413578123
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => console.log(`server running at ${url}`));