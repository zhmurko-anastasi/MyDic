import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
query GetUserInfo($userId: String!){
    findOneUser(userId: $userId){
        userId
        email
        name
        image
        surname
    }
}
`;

export const UPDATE_USER_INFO = gql`
mutation UpdateUserInfo($image: Upload, $email: String, $name: String, $surname: String, $userId: String!){
    updateUser(createUserInput: {email: $email, name: $name, surname: $surname, userId: $userId}, image: $image){
    userId
    email
    password,
    image
  }
}
`;