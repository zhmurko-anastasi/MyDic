import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const typeDefs = gql`
scalar Upload
type CreateUser {
    email: String!
    password: String!
}
` 
export const client = new ApolloClient({
  uri: 'http://192.168.0.105:3000/graphql',
  cache: new InMemoryCache(),
  typeDefs,
})