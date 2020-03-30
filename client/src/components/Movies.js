import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPopularMovies } from '../store/actions/movies'


class Movies extends React.Component {

  componentWillMount() {
    this.props.getPopularMovies()
  }

  render() {
    return (
      <div>
        <ul className="list-group">
        {this.props.movies.map((movie, i) =>
          <li className="list-group-item" key={i}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const dispatchToProps = (dispatch) => ({
   getPopularMovies: () => dispatch(getPopularMovies())
})

export default connect(mapStateToProps, dispatchToProps)(Movies)
