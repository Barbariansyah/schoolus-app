import gql from 'graphql-tag'

export const GET_VOUCHERS = gql`
  {
    voucherMany {
      _id
      name
      vendor
      price
      img_url
    }
  }
`

export const GET_VOUCHER_DETAIL = gql`
  query Voucher($id: MongoID!) {
    voucherById(_id: $id) {
      name
      vendor
      price
      available
      start_date
      end_date
      desc
      img_url
    }
  }
`

export const PURCHASE_VOUCHER = gql`
  mutation User($user_id: String!, $voucher_id: String!) {
    userPurchaseVoucher(user_id: $user_id, voucher_id: $voucher_id) {
      points
      own_voucher
    }
  }
`
