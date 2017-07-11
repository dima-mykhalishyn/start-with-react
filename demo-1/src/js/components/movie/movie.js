import React from 'react'

export default class Movie extends React.Component {
  render () {
    const {
      title, episode_id, opening_crawl, director, producer, release_date
    } = this.props

    return (
      <li>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">{title}</h2>
          </div>
          <div class="panel-body">
            <div><p>{opening_crawl}</p></div>
          </div>
          <div class="panel-footer">
            <div>Director : {director}</div>
            <div>Producer : {producer}</div>
            <div>Release Date: {release_date}</div>
          </div>
        </div>
      </li>
    )
  }
}