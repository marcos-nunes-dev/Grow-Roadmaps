import gql from 'graphql-tag';

export default gql`
  query GetLoggedInUserQuery {
    me {
      id
      name
      pictureUrl
      email
      points
    }
  }
`;
