import axios from 'axios'


export default function (endpoint, method='get', data) {
  return axios({
    method: method,
    url: `/api/${endpoint}`,
    data: data
  })
  .then(response => response.data)
  .catch(error => console.log(error))
}
