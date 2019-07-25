import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Body, Text } from 'native-base'

const styles = StyleSheet.create({
  root: {
    width: '100%'
  }
})

const Cardlist = () => {
  const texts = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'este',
    'peribus',
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'este',
    'peribus'
  ]

  return (
    <>
      {texts.map((el, id) => (
        <Card key={id} style={styles.root}>
          <CardItem>
            <Body>
              <Text>{el}</Text>
            </Body>
          </CardItem>
        </Card>
      ))}
    </>
  )
}

export default Cardlist
