const API_KEY = '1db01f96949cfaca5e0a63a813a2f5d7'
const MOVIE_API_URL = 'https://api.themoviedb.org/3'

const express = require('express')
const requestPromise = require('request-promise')

const app = express()

app.get('/api/v1/movies', async (req, res, next) => {
  // Restrict API calls from client to following three GET quests
  const validUrls = RegExp('^/movie/\\d+$|^/search/movie$|^/movie/popular$')
  if (!validUrls.test(req.query.url)) {
    res.status(403).send('Forbidden')
    return
  }

  const url = `${MOVIE_API_URL}${req.query.url}`
  const queryParams = Object.assign({api_key: API_KEY}, req.query)
  delete queryParams['url']

  try {
    const results = await requestPromise({
      url: url,
      qs: queryParams,
    }, (error, response, body) => {
      return body.results
    })
    res.json(JSON.parse(results))

  } catch (e)  {
    next(e)
  }
})


const PORT = process.env.PORT || 5000


app.listen(PORT, () => `Server running on port ${PORT}`)
