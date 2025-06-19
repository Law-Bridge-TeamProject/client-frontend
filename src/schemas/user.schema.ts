import {gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: String
    age: Int
    phoneNumber: String
  }
`