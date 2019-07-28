import React, { PureComponent } from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class AreaChartExample extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataArray: this.props.dataArray
    }
  }

  render() {
    const { dataArray } = this.state

    const data = dataArray

    return (
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: 'rgba(0, 122, 255, 0.7)' }}
      >
        <Grid />
      </AreaChart>
    )
  }
}

export default AreaChartExample
