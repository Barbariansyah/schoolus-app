import React from 'react'
import { Form, H2, H3, Text, Button, View } from 'native-base'

import GradePicker from './GradePicker'
import TermPicker from './TermPicker'
import ReportMark from './ReportMark'

export default class ReportForm extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      grade: 12,
      term: '1st Midterm',
      rows: []
    }
  }

  setGrade = grade => this.setState({ grade })
  setTerm = term => this.setState({ term })
  setMarks = marks => this.setState({ marks })

  addRow = () => {
    this.setState({ rows: [...this.state.rows, { name: '', value: '' }] })
  }

  setRowName = (index, name) => {
    let newRows = [...this.state.rows]
    newRows[index].name = name
    // this.setState({ rows: newRows })
  }

  setRowValue = (index, value) => {
    let newRows = [...this.state.rows]
    newRows[index].value = value
    // this.setState({ rows: newRows })
  }

  submit = () => console.log(this.state)

  render() {
    const { grade, term, rows } = this.state

    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <Form style={{ paddingBottom: 15 }}>
          <H2 style={{ textAlign: 'center', margin: 3 }}>
            Record a Report Card
          </H2>
          <H3 style={{ margin: 10 }}>Term</H3>
          <Text note>Grade</Text>
          <GradePicker grade={grade} setGrade={this.setGrade} />
          <Text note>Term</Text>
          <TermPicker term={term} setTerm={this.setTerm} />
          <H3 style={{ margin: 10 }}>Marks</H3>
          <ReportMark
            rows={rows}
            addRow={this.addRow}
            setRowName={this.setRowName}
            setRowValue={this.setRowValue}
          />
          <Button primary onPress={this.submit} style={{ margin: 10 }}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </View>
    )
  }
}
