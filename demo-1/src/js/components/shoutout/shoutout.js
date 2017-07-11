import React from "react"

export default class Shoutout extends React.Component {
  render() {
    const { shoutout, name } = this.props
    return (
      <li>
        <span>{shoutout}!!!</span>
        <span>&nbsp;by:&nbsp;{name}</span>
      </li>
    )
  }
}