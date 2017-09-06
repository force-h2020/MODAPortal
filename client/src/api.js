import axios from 'axios'


export default function (endpoint, method='get', data) {
  return axios({
    method: method,
    url: (process.env.REACT_APP_API_URL || '')  + `/api/${endpoint}`,
    data: data
  })
}
