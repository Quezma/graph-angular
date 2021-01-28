import gql from 'graphql-tag'

export const GET_CHARACTERS = gql`
{
  characters {
    results {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        residents {
          id
          name
          status
          species
        }
        created
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
      }
      created
    }
  }
}
`
