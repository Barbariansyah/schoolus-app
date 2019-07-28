import React, { Component } from 'react'
import { Tab, Tabs } from 'native-base'

import VoucherList from './VoucherList'
import OwnedVoucherList from './OwnedVoucherList'
export default class TabsExample extends Component {
  render () {
    return (
      <Tabs>
        <Tab heading='Browse'>
          <VoucherList />
        </Tab>
        <Tab heading='My Voucher'>
          <OwnedVoucherList />
        </Tab>
      </Tabs>
    )
  }
}
