import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  borderless={true} color='red'> 
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}    
        />
        <Menu.Item
          name='Tables'
          active={activeItem === 'Tables'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='More'
          active={activeItem === 'More'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}