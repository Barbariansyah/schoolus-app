import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import Voucher from './Voucher'

const styles = StyleSheet.create({
  root: {
    width: '100%'
  }
})

const Cardlist = () => {
  const texts = [
    {
      uri: 'https://source.unsplash.com/random/200x400',
      title: 'Voucher Title',
      provider: 'Voucher Provider'
    },
    {
      uri: 'https://source.unsplash.com/random/200x400',
      title: 'Voucher Title',
      provider: 'Voucher Provider'
    },
    {
      uri: 'https://source.unsplash.com/random/200x400',
      title: 'Voucher Title',
      provider: 'Voucher Provider'
    },
  ]

  return (
    <>
      {texts.map((el, id) => (
          <Voucher imgUri={el.uri} title={el.title} provider={el.provider} key={id}/>
      ))}
    </>
  )
}

export default Cardlist
