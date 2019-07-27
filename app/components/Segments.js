import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base'
import Cardlist from './Cardlist'
import { Col, Row, Grid } from 'react-native-easy-grid'
export default class TabsExample extends Component {
  render () {
    return (
      <Tabs>
        <Tab heading='Browse'>
          <Cardlist />
        </Tab>
        <Tab heading='My Voucher' />
      </Tabs>
    )
  }
}
