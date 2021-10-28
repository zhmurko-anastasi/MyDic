import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
query GetUserInfo{
    items{
            itemId
            title
            description
            image
            createdAt
            updatedAt
            status
    }
}
`;

export const CREATE_USER= gql`
mutation CreareUser($createUserInput: CreateUser){
    createUser(createUserInput: CreateUser){
    userId
    email
    description
    password
    name
    surname
    age
    phone
    address
    image
  }
}
`;