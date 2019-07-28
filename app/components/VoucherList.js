import React from 'react'
import { Query } from 'react-apollo'
import { Text } from 'native-base'

import { GET_VOUCHERS } from '../queries/voucher'
import Voucher from './Voucher'

const VoucherList = () => {
  return (
    <Query query={GET_VOUCHERS}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading ...</Text>
        if (error) return <Text>Error! {error.message}</Text>

        const { voucherMany } = data

        return (
          <>
            {voucherMany.map(({ img_url, name, vendor, _id }) => (
              <Voucher
                imgUri={img_url}
                title={name}
                provider={vendor}
                id={_id}
                key={_id}
              />
            ))}
          </>
        )
      }}
    </Query>
  )
}

export default VoucherList
