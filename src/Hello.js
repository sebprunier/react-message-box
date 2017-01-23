import React, { Component, PropTypes } from 'react'

export class Hello extends Component {

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: "World"
  }

  render () {
    return (
      <div>
        <span>Hello {this.props.name}</span>
      </div>
    )
  }
}
