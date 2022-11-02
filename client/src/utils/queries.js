import { gql } from "@apollo/client";

export const QUERY_HOUSEWORK = gql`
  query houseworkByUserID {
    houseworkByUserID {
      _id
      name
      description
      frequency
      user
    }
  }
`;
