import React from 'react'

import Shoutout from '../shoutout/shoutout'
import * as ShoutoutActions from '../../actions/shoutoutActions'
import ShoutoutStore from '../../stores/shoutoutStore'

export default class Shoutouts extends React.Component {

  constructor (props) {
    super(props)
    this.getShoutoutList = this.getShoutoutList.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      newShoutout: '',
      newName: '',
      shoutoutsList: ShoutoutStore.getShoutouts()
    }
  }

  componentWillMount () {
    ShoutoutStore.on('newShoutout', this.getShoutoutList)
  }

  componentWillUnmount () {
    ShoutoutStore.removeListener('newShoutout', this.getShoutoutList)
  }

  getShoutoutList () {
    this.setState({shoutoutsList: ShoutoutStore.getShoutouts()})
  }

  handleInputChange (event) {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }

  createShoutout (event) {
    event.preventDefault()
    console.log('createShoutout')
    ShoutoutActions.createShoutout(this.state.newShoutout, this.state.newName)
  }

  render () {
    const soList = this.state.shoutoutsList
    const soComponents = soList.map((so) => {
      return <Shoutout key={so.id} {...so}/>
    })
    const width = {
      width: 80,
      float: "left"
    }
    return (
      <div>
        <h2>Shout Outs List</h2>
        <form onSubmit={this.createShoutout.bind(this)}>
          <label>
            <span style={width}>Shoutout:</span>
            <input name="newShoutout" type="text" onChange={this.handleInputChange} value={this.state.newShoutout}/>
          </label>
          <label>
            <span style={width}>Name:</span>
            <input name="newName" type="text" onChange={this.handleInputChange} value={this.state.newName}/>
          </label>&nbsp;
          <input type="submit" value="Shout it!"/>
        </form>
        <ul>{soComponents}</ul>
      </div>
    )
  }
}