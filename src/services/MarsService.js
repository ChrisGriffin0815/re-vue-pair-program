import { AppState } from '../AppState'
import { api } from './AxiosService'

class MarsService {
  async getAll() {
    try {
      const res = await api.get('')
      // eslint-disable-next-line no-console
      console.log(res.data)
      AppState.marsData = res.data.photos
      // console.log(AppState.marsData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const marsService = new MarsService()
