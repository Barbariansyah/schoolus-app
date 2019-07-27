import React, { Component } from 'react'
import { Container, Header, Content, Accordion } from 'native-base'
import TestList from '../components/TestList'

const dataArray = [
  { title: 'First Element', content: <TestList /> },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
]
export default class AccordionHeaderContentStyleExample extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#ddecf8' }}
          />
        </Content>
      </Container>
    )
  }
}
