import { ApolloClient, from, gql, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from 'apollo-upload-client';

const  uri = 'http://192.168.0.105:3000/graphql';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const typeDefs = gql`
 scalar Upload
` 
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorLink, 
    createUploadLink ({uri})
  ]),
  typeDefs,
})