import React from 'react';
import $ from 'jquery'

class DetailedPage extends React.Component {
  state = { movie: null }

  componentWillMount() {
    const url = '/api/v1/movies?' + $.param({ url: `/movie/${this.props.match.params.id}` })
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({movie: res})
      })
  }

  render() {
    if (!this.state.movie) {
      return <div className="tc">Loading...</div>
    }

    const properties = [
      `Release Date: ${this.state.movie.release_date}`,
      `Original Language: ${this.state.movie.original_language}`,
      `Overview: ${this.state.movie.overview}`,
      `Runtime: ${this.state.movie.runtime} minutes`,
      `Homepage: ${this.state.movie.homepage}`,
    ]
    return <div>
        <h1>{this.state.movie.title}</h1>
        <ul className="list-group">
        {
          properties.map(property => {
            return <li className="list-group-item">
              {property}
            </li>
          })
        }
        </ul>
      </div>
  }
}

export default DetailedPage
