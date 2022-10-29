import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup(
    $userName: String!
    $email: String!
    $password: String!
    $profilePic: String!
  ) {
    signup(
      userName: $userName
      email: $email
      password: $password
      profilePic: $profilePic
    ) {
      token
      user {
        _id
        userName
        email
        password
        profilePic
      }
    }
  }
`;
