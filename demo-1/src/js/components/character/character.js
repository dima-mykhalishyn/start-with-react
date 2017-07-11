import React, { Component } from 'react'

export default class Character extends Component {

  render () {
    const {
      name, height, mass, hair, skin, eye, birthYear, gender
    } = this.props

    return (
      <li>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">{name}</h2>
          </div>
          <div class="panel-body">
            <div>Height: {height}</div>
            <div>Mass: {mass}</div>
            <div>Hair color: {hair}</div>
            <div>Skin color: {skin}</div>
            <div>Eye color: {eye}</div>
            <div>Birth year: {birthYear}</div>
            <div>Gender: {gender}</div>
          </div>
        </div>
      </li>
    )
  }

}