import gql from 'graphql-tag';

export const meQuerie = gql`
  {
    me {
      name
      pictureUrl
      email
      points
    }
  }
`;

export const allModulesQuerie = gql`
  {
    allModules {
      name
    }
  }
`;
