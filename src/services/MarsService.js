import { AppState } from '../AppState'
import { api } from './AxiosService'

class MarsService {
  async getAll() {
    try {
      const res = await api.get('')
      console.log(res.data)
      AppState.marsData = res.data.photos
      // console.log(AppState.marsData)
    } catch (error) {
      console.error(error)
    }
  }
}

export const marsService = new MarsService()
