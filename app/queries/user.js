import gql from 'graphql-tag'

export const GET_COMPLETE_USER = gql`
  query getUser($id: MongoID!) {
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
  query getShopUser($id: MongoID!) {
    userById(_id: $id) {
      _id
      user_name
      points
      own_voucher
    }
  }
`

export const AUTH_USER = gql`
  query authUser($user_name: String!, $password: String!) {
    authUser(user_name: $user_name, password: $password) {
      token
      expires_in
    }
  }
`
