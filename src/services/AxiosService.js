import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=pvThY8Ou0odGxqyPEestAs9gz7Flevh67tXOWWg1&sol=2',
  timeout: 3000
})
export const apiPokemon = Axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/josh/pokemon',
  timeout: 11000
})

// NOTE remember to add the auth headers to any axios instance you need auth on.
export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
  apiPokemon.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
  apiPokemon.defaults.headers.authorization = ''
}
