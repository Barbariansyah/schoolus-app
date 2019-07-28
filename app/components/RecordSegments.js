import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
  Text
} from 'native-base'

import Component1 from '../components/ReportForm'
import Component2 from '../components/ExamForm'

export default class SegmentOutsideHeaderExample extends Component {
  state = {
    activePage: 1
  }

  selectComponent = activePage => () => this.setState({ activePage })

  _renderComponent = () => {
    if (this.state.activePage === 1) return <Component1 />
    //... Your Component 1 to display
    else return <Component2 /> //... Your Component 2 to display
  }

  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left />
          <Body>
            <Segment style={{ padding: 0, margin: 10 }}>
              <Button
                active={this.state.activePage === 1}
                onPress={this.selectComponent(1)}
                style={{ margin: 4 }}
              >
                <Text>Report</Text>
              </Button>
              <Button
                active={this.state.activePage === 2}
                onPress={this.selectComponent(2)}
                style={{ margin: 4 }}
              >
                <Text>Exams</Text>
              </Button>
            </Segment>
          </Body>
          <Right />
        </Header>
        <Content padder>{this._renderComponent()}</Content>
      </Container>
    )
  }
}
