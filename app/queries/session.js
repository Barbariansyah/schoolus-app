import gql from 'graphql-tag'

export const NEW_SESSION = gql`
  mutation newSession($start: Date!, $duration: Float!, $user_id: MongoID!) {
    sessionCreateOne(
      record: { start: $start, duration_sec: $duration, user: $user_id }
    ) {
      recordId
    }
  }
`
