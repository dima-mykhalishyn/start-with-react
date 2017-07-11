import React from 'react'

import Movie from '../../components/movie/movie'
import MoviesStore from '../../stores/moviesStore'
import Shoutouts from '../shoutouts/shoutouts'

export default class Movies extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      movies: MoviesStore.getMovies()
    }
  }

  render () {
    const {movies} = this.state
    const movieList = movies.map((movie) => {
      return <Movie key={movie.episode_id} {...movie}/>
    })

    const marginStyle = {
      marginLeft:30
    }
    return (
      <div class="row">
        <div class="col-sm-4" style={marginStyle}>
          <h2>Movies List</h2>
          <ul>{movieList}</ul>
        </div>
        <div class="col-sm-4">
          <Shoutouts/>
        </div>
      </div>
    )
  }
}