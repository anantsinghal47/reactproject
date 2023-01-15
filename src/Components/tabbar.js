import { AgGridReact } from 'ag-grid-react'
import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

var rowData = [
    
        { "make": "TCS", "model": "ABC", "price": 72000 },
            { "make": "Tata", "model": "EFG", "price": 32000 },
            { "make": "Titan", "model": "RGH", "price": 32000 },
    
]
var coldata = [
    {field: 'make', filter: true , sortable:'true'},
    {field: 'model', filter: true , sortable:'true'},
    {field: 'price'}
  ]

const panes = [
  {
    menuItem: 'Home',
    render: () => <Tab.Pane attached={false} active={false} >Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tables',
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: 'More',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

class TabExampleColoredInverted extends Component {
  state = { color: colors[0] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, (c) => (
            <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
        </select>

        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
}

export default TabExampleColoredInverted