import gql from 'graphql-tag'

export const GET_RECORDS = gql`
  query Record($user_id: MongoID!) {
    recordMany(filter: { user: $user_id }) {
      _id
      term
      grade
      marks {
        name
        value
      }
      type
      fields
    }
  }
`
