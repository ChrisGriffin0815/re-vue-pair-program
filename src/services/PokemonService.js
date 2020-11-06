import { AppState } from '../AppState'
import { apiPokemon } from './AxiosService'

class PokemonService {
  async getAll() {
    try {
      const res = await apiPokemon.get('')
      // eslint-disable-next-line no-console
      console.log(res.data.data)
      AppState.pokemon = res.data.data
    // eslint-disable-next-line no-console
    } catch (error) { console.error(error) }
  }

  async create(pokemonData) {
    try {
      const res = await apiPokemon.post('', pokemonData)
      AppState.pokemon = [...AppState.pokemon, res.data.data]
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
