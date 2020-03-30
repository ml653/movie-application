import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { searchMovies } from '../store/actions/movies'

class SearchBar extends React.Component {
  state = { query: null }

  searchMovies = () => {
    if (this.state.query) {
      this.props.searchMovies(this.state.query)
    }
  }

  onChange = (e) => {
    this.setState({query: e.target.value})
  }

  render() {
    return <div className="mb3">
      <input onChange={this.onChange} className="ma1 form-control" type="text" placeholder="Search movies by name"/>
      <button type="button" className="ma1 btn btn-primary" onClick={this.searchMovies}>Submit</button>
    </div>
  }
}

const dispatchToProps = (dispatch) => ({
  searchMovies: (query) => dispatch(searchMovies(query))
})

export default connect(null, dispatchToProps)(SearchBar);
