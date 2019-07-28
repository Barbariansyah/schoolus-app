import React from 'react'
import { Query } from 'react-apollo'
import { Text } from 'native-base'

import { GET_OWNED_VOUCHERS } from '../queries/voucher'
import withUserPurchase from '../lib/withUserPurchase'
import Voucher from './Voucher'

const OwnedVoucherList = ({ user: { own_voucher } }) => {
  return (
    <Query query={GET_OWNED_VOUCHERS} variables={{ voucher_ids: own_voucher }}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading ...</Text>
        if (error) return <Text>Error! {error.message}</Text>

        const { voucherByIds } = data

        return (
          <>
            {voucherByIds.length > 0 ? (
              voucherByIds.map(({ img_url, name, vendor, _id }) => (
                <Voucher
                  imgUri={img_url}
                  title={name}
                  provider={vendor}
                  id={_id}
                  key={_id}
                />
              ))
            ) : (
              <Text>No Voucher Owned</Text>
            )}
          </>
        )
      }}
    </Query>
  )
}

export default withUserPurchase(OwnedVoucherList)
