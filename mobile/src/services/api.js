import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.10'
})

api.interceptors.response.use(response => {
  if (response.status === 200 && response.data) {
    return response.data
  } else {
    throw Error('Erro desconhecido.')
  }
})

export default api
