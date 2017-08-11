import axios from 'axios'


export default function (endpoint, method='get', data) {
  return axios({
    method: method,
    url: `/api/${endpoint}`,
    data: data
  })
  .then(response => {console.log(response);return response}) 
  .then(response => response.data)
  .catch(error => console.log(error))
}
