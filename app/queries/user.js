import gql from 'graphql-tag'

export const GET_COMPLETE_USER = gql`
  query User($id: MongoID!) {
    userById(_id: $id) {
      _id
      user_name
      full_name
      school
      grade
      phone
      email
      points
      own_voucher
    }
  }
`

export const GET_SHOP_USER = gql`
  query User($id: MongoID!) {
    userById(_id: $id) {
      _id
      points
      own_voucher
    }
  }
`
