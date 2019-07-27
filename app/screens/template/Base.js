import React from 'react'
import { StatusBar } from 'react-native'
import { Container } from 'native-base'

import Navbar from '../../navigation/components/Footer'

const Base = ({ children }) => {
  return (
    <>
      <StatusBar hidden />
      <Container>{children}</Container>
      <Navbar />
    </>
  )
}

export default Base
