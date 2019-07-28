import gql from 'graphql-tag'

export const GET_RECORDS = gql`
  query getRecord($user_id: MongoID!) {
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

export const NEW_RECORD = gql`
  mutation newRecord(
    $type: EnumRecordType!
    $grade: Float!
    $term: String!
    $fields: [String]!
    $user_id: MongoID!
  ) {
    recordCreateOne(
      record: {
        type: $type
        grade: $grade
        fields: $fields
        term: $term
        user: $user_id
      }
    ) {
      recordId
    }
  }
`

export const NEW_MARKS = gql`
  mutation newMarks($records: [CreateManyMarkInput!]!) {
    markCreateMany(records: $records) {
      recordIds
    }
  }
`
// mutation Mark($name:String!, $values:[BSONDecimal]!, $record_id:MongoID!){
//   markCreateMany(records: [
//     {name: $name, value: $values, record: $record_id}
//   ]){
//     recordIds
//   }
// }
