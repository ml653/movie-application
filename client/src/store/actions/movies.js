import $ from 'jquery'
import {GET_MOVIES} from './constants';

export const searchMovies = (query) => dispatch => {
  const url = '/api/v1/movies?' + $.param({ url: '/search/movie', query })
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch({type: GET_MOVIES, payload: res.results}))
}

export const getPopularMovies = () => dispatch => {
  const url = '/api/v1/movies?' + $.param({ url: '/movie/popular' })
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch({type: GET_MOVIES, payload: res.results}))
}
