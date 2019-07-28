import React from 'react'
import { StatusBar } from 'react-native'
import { Container } from 'native-base'

const Base = ({ children }) => {
  return (
    <>
      <StatusBar hidden />
      <Container>{children}</Container>
    </>
  )
}

export default Base
