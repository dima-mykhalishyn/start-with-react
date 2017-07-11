import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Characters from './characters/characters'
import Movies from './movies/movies'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {welcome: 'Welcome to Start Wars Trivia!'}
  }

  render () {
    return (
      <div>
        <div>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <p class="navbar-brand">React &nbsp;</p>
                <Link to="movies-list" class="btn btn-default navbar-btn">Movies</Link>
                <Link to="characters-list" class="btn btn-default navbar-btn">Characters</Link>
              </div>
              <p class="navbar-brand">&nbsp; {this.state.welcome}</p>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/movies-list" component={Movies}/>
          <Route path="/characters-list/:character?" component={Characters}/>
        </Switch>
      </div>
    )
  }
}