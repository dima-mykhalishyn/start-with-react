import React, { Component } from 'react'

import Character from '../character/character'
import CharacterStore from '../../stores/charactersStore'

export default class Characters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      characters: CharacterStore.getCharacters()
    }
  }

  render () {
    const {
      characters
    } = this.state
    const charactersList = characters.map((character) => {
      return <Character key={character.name} {...character}/>
    })
    return (
      <div>
        <h2>Characters List</h2>
        <h4>{charactersList}</h4>
      </div>
    )
  }
}