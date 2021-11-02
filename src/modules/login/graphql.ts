import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!){
    createUser(createUserInput: {email: $email, password: $password}){
    userId
    email
    password
  }
}
`;