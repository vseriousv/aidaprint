import { gql } from 'apollo-boost'

export const articlesQuery = gql`
query users{
  users{
    id
    firstName
    lastName
  }
}
`;